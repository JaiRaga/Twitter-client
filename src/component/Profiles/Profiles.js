import React from "react";
import ProfileItem from "./ProfileItem";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Followers from "./Followers";
import Following from "./Following";

const Profiles = () => {
  return (
    <Grid container>
      <Grid item>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Grid container item direction='column'>
          <Grid item>
            <Typography variant='h5'>username</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5'>handle</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item direction='column'>
        <Grid container item justify='space-evenly'>
          <Followers />
          <Following />
        </Grid>
        <Grid container item justify='center'>
          <ProfileItem />
          <Grid item>
            <Button color='primary'>Follow</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profiles;
