import React, { Fragment } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  IconButton,
  Divider,
  Paper
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RepeatIcon from "@material-ui/icons/Repeat";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import CommentIcon from "@material-ui/icons/Comment";
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
    marginBottom: 10
  }
}));

const TweetItem = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Paper elevation={3} className={classes.paper}>
        <Grid container item>
          <Grid item className={classes.root}>
            <Avatar alt='username' src={profilePic} className={classes.large} />
            <Grid container item direction='column'>
              <Grid item>username handle dateOfTweet</Grid>
              <Grid item>
                Tweet Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magni tempora hic facilis quis ullam! Necessitatibus, nam minus.
                Natus sint consequatur doloribus. Provident aliquam
                reprehenderit fugit vero nulla enim nobis delectus hic itaque
                eum laudantium, consequuntur, accusantium porro fugiat natus
                rerum quas veritatis deserunt molestias. Ab explicabo hic
                obcaecati illo magni illum minus, ad beatae odit eligendi
                perferendis fugit pariatur laborum atque reprehenderit esse
                ducimus nihil, excepturi unde ut cumque doloremque. Quibusdam
                iste quam itaque dolorem quae, quasi molestiae reprehenderit
                laboriosam. Laudantium expedita fuga veniam et similique unde
                voluptas incidunt voluptates culpa iusto. Numquam quas
                voluptates, aspernatur sequi dolorem quidem quam.
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
                  <IconButton aria-label='retweet' className={classes.retweet}>
                    <RepeatIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton aria-label='comment' className={classes.comment}>
                    <CommentIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default TweetItem;
