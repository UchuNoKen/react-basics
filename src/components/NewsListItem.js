import React from "react";
import { css } from "glamor";

const NewsItem = ({ item }) => {
  // console.log(props);
  return (
    <div>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default NewsItem;
