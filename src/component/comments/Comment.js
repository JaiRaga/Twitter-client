import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import CommentItem from "./CommentItem";

const Comment = () => {
  return (
    <Grid container item direction='column'>
      <CommentItem />
      <CommentItem />
    </Grid>
  );
};

export default Comment;
