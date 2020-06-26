import React from "react";
import { Grid, Divider } from "@material-ui/core";
import TweetItem from "./TweetItem";

const Tweets = () => {
  return (
    <Grid container item>
      <TweetItem />
      <TweetItem />
      <TweetItem />
    </Grid>
  );
};

export default Tweets;
