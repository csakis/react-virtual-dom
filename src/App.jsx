import { hot } from "react-hot-loader";
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Btn from "./Button";
import Btn2 from "./Btn2";
import IpText from "./IpText";
import SimpleText from "./SimpleText";

class App extends Component {
  render() {
    return (
      <Container>
        <CssBaseline />
        <Btn />
        <Btn2 />
        {/* <SimpleText />   */}
        <IpText />
      </Container>
    );
  }
}

export default hot(module)(App);
