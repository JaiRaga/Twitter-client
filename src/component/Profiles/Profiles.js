import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProfileItem from "./ProfileItem";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { SyncLoader } from "react-spinners";
import Followers from "./Followers";
import Following from "./Following";

const style = {
  Layout: {
    marginLeft: 27
  },
  Spinner: {
    margin: "10%"
  }
};

const Profiles = () => {
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  return (
    <Grid container>
      <Grid item style={style.Layout}>
        <IconButton aria-label='back-button' color='secondary'>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Grid container item direction='column' style={style.Layout}>
          <Grid item>
            <Typography variant='h5'>username</Typography>
          </Grid>
          <Grid item>
            <Typography variant='caption'>@handle</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='column'>
        <Grid container item justify='space-evenly'>
          <Followers />
          <Following />
        </Grid>
        <Grid container item justify='center'>
          {loading || user === null ? (
            <Grid item style={style.Spinner}>
              <SyncLoader loading size={15} color='#36D7B7' />
            </Grid>
          ) : (
            <Fragment>
              <ProfileItem user={user} />
              <ProfileItem user={user} />
              <ProfileItem user={user} />
              <ProfileItem user={user} />
              <ProfileItem user={user} />
            </Fragment>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profiles;
