import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import TodayMove from "../../components/TodayMove/TodayMove";

export default class Test extends Component {
  render() {
    return (
      <Container>
        <TodayMove />
      </Container>
    );
  }
}
