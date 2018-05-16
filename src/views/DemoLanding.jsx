import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "../styles/views/DemoLanding.css";
import colors from "../styles/colors";

export default class Demo extends Component {
  render() {
    return (
      <Link to="home">
      <div id="demowrapper">
        <div id="demo">
          {/* <Button id="demoButton" color="dark" size="lg">
            Demo
          </Button> */}
        </div>
      </div>
      </Link>
    );
  }
}
