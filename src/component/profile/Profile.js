import React from "react";
import { Grid, Avatar, makeStyles, Button } from "@material-ui/core";
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
    background: "#FF8700",
    padding: 10
  },
  centerText: {
    margin: 9,
    padding: 3
  },
  follow: {
    margin: 1
  }
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <Grid container item>
      <Grid container direction='column' item className={classes.back}>
        <Grid item>
          <div className={classes.root}>
            <Avatar
              alt='username'
              src={profilePic}
              className={classes.large}></Avatar>
          </div>
          <Button variant='outlined'>Edit Profile</Button>
        </Grid>
        <Grid container direction='column'>
          <Grid className={classes.centerText} item>
            username
          </Grid>
          <Grid className={classes.centerText} item>
            handle
          </Grid>
          <Grid className={classes.centerText} item>
            caption
          </Grid>
          <Grid container className={classes.follow} spacing={2} item>
            <Grid item>{103} following</Grid>
            <Grid item>{98} followers</Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
