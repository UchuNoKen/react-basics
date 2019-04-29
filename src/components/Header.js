import React from "react";
import "../css/styles.css";

const Header = props => {
  // state = {
  //   keywords: ""
  // };

  // inputChangeHandler = event => {
  //   // console.log("input change registered");
  //   // console.log(event.target.value);

  //   this.setState({
  //     keywords: event.target.value
  //   });
  // };

  // console.log(this.props.keywords);

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
      <input type="text" onChange={props.keywords} />
    </header>
  );
};

export default Header;
