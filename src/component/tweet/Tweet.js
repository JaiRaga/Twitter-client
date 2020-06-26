import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  TextField,
  Button,
  Paper
} from "@material-ui/core";
import profilePic from "../../img/raga.jpg";
import PostTweetButton from "./PostTweetButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  margin: {
    marginBottom: 10
  }
}));

const Tweet = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper elevation={3} className={classes.margin}>
        <Grid container item>
          <Grid item className={classes.root}>
            <Avatar alt='username' src={profilePic} className={classes.large} />
            <Grid container item spacing={4}>
              <Grid item>
                <form>
                  <TextField
                    id='post-tweet'
                    label="What's happening?"></TextField>
                </form>
              </Grid>
              <Grid container item>
                <PostTweetButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Tweet;
