import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  //   twitterIcon: {
  //     color: "white"
  //   },
  navbarColor: {
    backgroundColor: "#1a0285"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbarColor}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='twitter icon'>
            <TwitterIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Twitter
          </Typography>
          <Button color='inherit'>
            <PersonIcon className={classes.icon} /> Login
          </Button>
          <Button color='inherit'>
            <PersonAddIcon className={classes.icon} /> Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
