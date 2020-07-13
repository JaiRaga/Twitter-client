import React, { Fragment, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Profile from "./Profile";
import UserTweets from "../tweets/UserTweets";
import { CLEAR_TWEETS } from "../../Redux/actions/types";

const style = (theme) => ({
  Grid: {
    marginTop: 10
  }
});

const ProfileContainer = () => {
  const dispatch = useDispatch();
  dispatch({ type: CLEAR_TWEETS });
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
        xs={12}
        sm={8}
        md={5}
        direction='column'
        justify='center'
        alignItems='center'
        spacing={4}>
        <Profile />
        <UserTweets />
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
