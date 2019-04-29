import React, { Component } from "react";
import ReactDOM from "react-dom";

import JSON from "./db.json";

// Components
import Header from "./components/Header";
import NewsList from "./components/NewsList";

class App extends Component {
  state = {
    news: JSON
  };

  getKeyword = event => {
    console.log(event.target.value);
  };

  render() {
    // console.log(this.state.news);
    return (
      <div>
        <Header keywords={this.getKeyword} />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
