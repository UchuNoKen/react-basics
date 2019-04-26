import React, { Component } from "react";

class Header extends Component {
  state = {
    title: "The keywords are: ",
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
    console.log(this.state.keywords);
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler.bind(this)} />
        <div>The keywords are:</div>
      </header>
    );
  }
}

export default Header;
