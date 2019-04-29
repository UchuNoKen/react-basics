import React, { Component } from "react";
import "../css/styles.css";

class Header extends Component {
  state = {
    keywords: ""
  };

  inputChangeHandler = event => {
    // console.log("input change registered");
    // console.log(event.target.value);

    this.setState({
      keywords: event.target.value
    });
  };

  render() {
    //console.log(this.state.keywords);

    // styles in an object variable
    // const style = {
    //   background: "red"
    // };

    // if (this.state.keywords != "") {
    //   style.background = "blue";
    // } else {
    //   style.background = "red";
    // }

    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
