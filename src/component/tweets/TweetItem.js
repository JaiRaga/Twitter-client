import React, { Fragment, useEffect, useState } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  IconButton,
  Divider,
  Paper,
  Typography,
  Tooltip
} from "@material-ui/core";
import moment from "moment-twitter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import CommentIcon from "@material-ui/icons/Comment";
import AddCommentIcon from "@material-ui/icons/AddComment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { RingLoader } from "react-spinners";
import profilePic from "../../img/raga.jpg";
import { getUserById } from "../../Redux/actions/profile";
import { addLike } from "../../Redux/actions/tweet";
import Comment from "../comments/Comment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    width: "100%",
    maxWidth: "100%"
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
    // maxWidth: "100%",
  },
  like: {
    color: "#fa1616",
    backgroundColor: "#fa161619"
  },
  retweet: {
    // color: "#01a9b4",
    // backgroundColor: "#01a9b411"
    color: "#1976d2",
    backgroundColor: "#1976d211"
  },
  comment: {
    color: "#12cad6",
    backgroundColor: "#12cad619"
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
  },
  expand: {
    marginLeft: "auto",
    marginBottom: 20
  }
}));

const TweetItem = ({ tweet }) => {
  const classes = useStyles();
  const loading = useSelector((state) => state.tweet.loading);
  const authUser = useSelector((state) => state.auth.user);
  const user = tweet.owner;

  const [liked, setLiked] = useState(false);
  const [retweet, setRetweet] = useState(false);
  const [comment, setComment] = useState(false);
  const [title, setTitle] = useState("Edit");

  const dispatch = useDispatch();
  // if (liked) dispatch(addLike(tweet._id));
  const setLike = (id) => {
    // setLiked((prevState) => !prevState)
    console.log(id, typeof id);
    console.log(
      tweet.likes.map((like) => like._id.toString() === id.toString())
    );
    console.log(tweet.likes.map((like) => like._id === id));
    if (
      tweet.likes.map((like) => like._id.toString() === id.toString())
        .length === 0
    ) {
      setLiked(true);
      dispatch(addLike(id));
    }
  };

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
                    <Typography variant='caption'>
                      {moment(
                        moment() + 36e5 * new Date(tweet.createdAt).getHours()
                      ).twitterLong()}
                    </Typography>
                  </Grid>
                  <Grid item className={classes.expand}>
                    <Tooltip title={title}>
                      <IconButton aria-label='expand-more'>
                        <ExpandMoreIcon />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
                <Divider />
                <Grid item className={classes.tweet}>
                  {tweet.text}
                </Grid>
                <Grid
                  container
                  item
                  justify='space-between'
                  className={classes.likeShareContainer}>
                  <Grid item>
                    {tweet.likes.length > 0 ? tweet.likes.length : null}
                    <IconButton
                      aria-label='like'
                      className={classes.like}
                      onClick={() => setLike(tweet._id)}>
                      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label='retweet'
                      className={classes.retweet}
                      onClick={() => setRetweet((prevState) => !prevState)}>
                      {retweet ? <RepeatOneIcon /> : <RepeatIcon />}
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      aria-label='comment'
                      className={classes.comment}
                      onClick={() => setComment((prevState) => !prevState)}>
                      {comment ? <CommentIcon /> : <AddCommentIcon />}
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Paper>
      <Comment />
    </Fragment>
  );
};

export default TweetItem;
