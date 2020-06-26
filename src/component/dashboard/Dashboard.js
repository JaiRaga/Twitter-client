import React from "react";
import { Grid } from "@material-ui/core";
import Tweets from "../tweets/Tweets";
import Tweet from "../tweet/Tweet";

const style = {
  Margin: {
    marginTop: 10
  }
};

const Dashboard = () => {
  return (
    <Grid container justify='center' alignItems='center' style={style.Margin}>
      <Grid container direction='column' item sm={10}>
        <Tweet />
        <Tweets />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
