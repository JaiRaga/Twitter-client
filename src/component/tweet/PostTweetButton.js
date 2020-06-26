import React from "react";
import { Grid, Button } from "@material-ui/core";

const PostTweetButton = () => {
  return (
    <Grid item>
      <Button variant='contained' color='primary'>
        Tweet
      </Button>
    </Grid>
  );
};

export default PostTweetButton;
