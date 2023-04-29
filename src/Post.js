import React from "react";
import style from "./index.css";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-ui/core/styles";
import CustomTheme from "./assets/CustomTheme";
import { Typography } from "@material-ui/core";

const Post = (props) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <div className="w-full flex justify-center items-center">
        <div className="bg-purple m-5 rounded-md p-4 w-6/12">
          <Typography variant="h2">{props.data.title}</Typography>
          <Typography variant="caption">{props.data.body}</Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Post;
