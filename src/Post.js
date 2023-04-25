import React from "react";
import style from "./index.css";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-ui/core/styles";
import CustomTheme from "./assets/CustomTheme";
import { Typography } from "@material-ui/core";

const Post = (props) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <div className="bg-purple m-5 rounded-md p-2">
      <Typography variant="h2">{props.data.title}</Typography>
        <p>{props.data.body}</p>
      </div>
    </ThemeProvider>
  );
};

export default Post;
