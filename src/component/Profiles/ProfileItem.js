import React, { Fragment } from "react";
import {
  Grid,
  Avatar,
  Paper,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";

import { SyncLoader } from "react-spinners";
import profilePic from "../../img/raga.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  spaceLeft: {
    // marginLeft: "auto"
  }
}));

const ProfileItem = ({ user }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container item>
        <Grid item className={classes.root}>
          <Avatar alt='username' src={profilePic} />
          <Grid container item direction='column' xs={5}>
            <Grid item>
              <Typography variant='h6'>{user.username}</Typography>
            </Grid>
            <Grid item>
              <Typography variant='subtitle2'>@{user.handle}</Typography>
            </Grid>

            <Grid item>
              <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                eius voluptate praesentium, corrupti ipsa voluptates.
                {/* {user.caption ? user.caption : "No caption Avaliable.."} */}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button color='primary'>Follow</Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ProfileItem;
