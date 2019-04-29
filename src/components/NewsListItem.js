import React from "react";
import { css } from "glamor";

const NewsItem = ({ item }) => {
  // console.log(props);

  let news_item = css({
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
    borderBottom: "1px solid aliceBlue",
    ":hover": {
      color: "aliceBlue"
    },
    "@media(max-width: 500px)": {
      color: "cadetBlue"
    }
  });

  let item_grey = css({
    background: "slateGrey"
  });

  return (
    <div {...news_item} {...item_grey}>
      <h3>{item.title}</h3>
      <div>{item.feed}</div>
    </div>
  );
};

export default NewsItem;
