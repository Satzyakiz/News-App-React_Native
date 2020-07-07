import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Right,
  Body,
  Title,
} from "native-base";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "#01a9b4" }} hasTabs>
          <Left />
          <Left />
          <Left />
          <Body>
            <Title>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            tabStyle={{ backgroundColor: "#01a9b4" }}
            activeTabStyle={{ backgroundColor: "#01a9b4" }}
            textStyle={{ color: "white" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#01a9b4" }}
            activeTabStyle={{ backgroundColor: "#01a9b4" }}
            textStyle={{ color: "white" }}
            heading="Business"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#01a9b4" }}
            activeTabStyle={{ backgroundColor: "#01a9b4" }}
            textStyle={{ color: "white" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
