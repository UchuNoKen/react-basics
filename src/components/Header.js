import React, { Component } from "react";

class Header extends Component {
  inputChangeHandler(event) {
    // console.log("input change registered");
    console.log(event.target.value);
  }

  render() {
    return (
      <header>
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />
      </header>
    );
  }
}

export default Header;
