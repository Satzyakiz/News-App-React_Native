import React from "react";
import { Alert, ActivityIndicator } from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  View,
  Thumbnail,
  ListItem,
  List,
  Button,
  Text,
  Left,
  Body,
  Right,
  Item,
} from "native-base";
import { getArticles } from "../../service/news";
import DataItem from "../../component/dataItem";
import ModalComponent from "../../component/modal";

export default class Tab1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {},
    };
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  componentDidMount() {
    getArticles("technology").then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert("Error", "Something went wrong");
      }
    );
  }
  render() {
    let view =
      this.state.isLoading === true ? (
        <View>
          <ActivityIndicator animating={this.state.isLoading} />
          <Text> Please Wait </Text>
        </View>
      ) : (
        <List
          dataArray={this.state.data}
          keyExtractor={(item, index) => index.toString()}
          renderRow={(item) => {
            return (
              <DataItem onPress={this.handleItemDataOnPress} data={item} />
            );
          }}
        />
      );
    return (
      <Container>
        <Content>{view}</Content>
        <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
