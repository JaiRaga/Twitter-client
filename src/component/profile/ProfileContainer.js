import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import Profile from "./Profile";
import Tweets from "../tweets/Tweets";

const style = (theme) => ({
  Grid: {
    marginTop: 10
  }
});

const ProfileContainer = () => {
  return (
    <Grid
      container
      spacing={2}
      style={style.Grid}
      justify='center'
      alignItems='center'>
      <Grid
        container
        item
        sm={8}
        direction='column'
        justify='center'
        alignItems='center'
        spacing={4}>
        <Profile />
        <Tweets />
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
