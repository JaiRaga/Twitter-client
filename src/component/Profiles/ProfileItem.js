import React, { Fragment } from "react";
import { Grid, Avatar, Paper, Button, makeStyles } from "@material-ui/core";

import { SyncLoader } from "react-spinners";
import profilePic from "../../img/raga.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  spaceLeft: {
    marginLeft: 15
  }
}));

const ProfileItem = ({ user }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item className={classes.root}>
        <Avatar alt='username' src={profilePic} />
        <Grid container item direction='column'>
          <Grid item>{user.username}</Grid>
          <Grid item>{user.handle}</Grid>

          <Grid item>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            laudantium facilis repudiandae optio non sit?
          </Grid>
        </Grid>
        <Grid item className={classes.spaceLeft}>
          <Button color='primary'>Follow</Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ProfileItem;
