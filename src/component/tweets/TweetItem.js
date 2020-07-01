import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  IconButton,
  Divider,
  Paper,
  Typography
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import CommentIcon from "@material-ui/icons/Comment";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import profilePic from "../../img/raga.jpg";

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
    margin: theme.spacing(1)
  },
  likeShareContainer: {
    marginTop: 10
  },
  like: {
    color: "#fa1616"
  },
  retweet: {
    color: "#01a9b4"
  },
  comment: {
    color: "#12cad6"
  },
  paper: {
    maringTop: 10,
    marginBottom: 10,
    width: "100%",
    maxWidth: "100%",
    padding: 25
  },
  tweet: {
    marginTop: 10
  },
  marginTop: {
    marginTop: 2
  }
}));

const TweetItem = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);
  return (
    <Fragment>
      <Paper elevation={3} className={classes.paper}>
        {loading || user === null ? (
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
            item
            className={classes.loadingSpinner}>
            <RingLoader loading color='#6A07EE' size={25} />
          </Grid>
        ) : (
          <Grid container item>
            <Grid item className={classes.root}>
              <Avatar
                alt={user.username}
                src={profilePic}
                className={classes.large}
              />
              <Grid container item direction='column'>
                <Grid container item spacing={1}>
                  <Grid item>
                    <Typography variant='h5'>{user.username}</Typography>
                  </Grid>
                  <Grid item className={classes.marginTop}>
                    <Typography variant='caption'>@{user.handle}</Typography>
                  </Grid>
                  <Grid item className={classes.marginTop}>
                    <Typography variant='caption'>{user.createdAt}</Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid item className={classes.tweet}>
                  Hello! I'm here !
                </Grid>
                <Grid
                  container
                  item
                  justify='space-between'
                  className={classes.likeShareContainer}>
                  <Grid item>
                    <IconButton aria-label='like' className={classes.like}>
                      <FavoriteBorderIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label='retweet'
                      className={classes.retweet}>
                      <RepeatIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label='comment'
                      className={classes.comment}>
                      <CommentIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Paper>
    </Fragment>
  );
};

export default TweetItem;
