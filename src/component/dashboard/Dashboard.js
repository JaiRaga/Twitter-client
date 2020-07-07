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
      <Grid
        container
        direction='column'
        spacing={2}
        item
        xs={12}
        sm={8}
        md={10}
        lg={5}>
        <Tweet />
        <Tweets />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
