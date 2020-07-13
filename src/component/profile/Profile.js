import React from "react";
import { Grid, Avatar, makeStyles, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { PacmanLoader } from "react-spinners";
import profilePic from "../../img/raga.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  back: {
    background: "#556cd6",
    padding: 10
  },
  centerText: {
    margin: 9,
    padding: 3
  },
  loadingSpinner: {
    margin: 15,
    padding: 15
  },
  follow: {
    margin: 1
  }
}));

const Profile = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.auth.loading);
  const user = useSelector((state) => state.auth.user);

  return (
    <Grid container item>
      {loading || user === null ? (
        <Grid
          container
          justify='center'
          item
          className={classes.loadingSpinner}>
          <PacmanLoader loading color='#07ADEE' size={25} />
        </Grid>
      ) : (
        <Grid container direction='column' item className={classes.back}>
          <Grid item>
            <div className={classes.root}>
              <Avatar
                alt={user.username}
                src={profilePic}
                className={classes.large}></Avatar>
            </div>
            <Button variant='outlined'>Edit Profile</Button>
          </Grid>
          <Grid container direction='column'>
            <Grid className={classes.centerText} item>
              {user.username}
            </Grid>
            <Grid className={classes.centerText} item>
              @{user.handle}
            </Grid>
            <Grid className={classes.centerText} item>
              {user.caption}
            </Grid>
            <Grid container className={classes.follow} spacing={2} item>
              <Grid item>{user.following.length} Following</Grid>
              <Grid item>{user.followers.length} Followers</Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Profile;
