import React from "react";
import { Grid, Avatar, Paper, Button } from "@material-ui/core";
import profilePic from "../../img/raga.jpg";

const ProfileItem = () => {
  return (
    // <Paper variant='outlined' elevation={3}>
    <Grid container item sm={8} spacing={2}>
      <Grid container item>
        <Grid item>
          <Avatar alt='username' src={profilePic} />
        </Grid>
        <Grid item>
          <Grid item>username</Grid>
          <Grid item>handle</Grid>

          <Grid item></Grid>
        </Grid>
      </Grid>
    </Grid>
    // </Paper>
  );
};

export default ProfileItem;
