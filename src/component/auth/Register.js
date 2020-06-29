import React from "react";
import {
  makeStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  registerContainer: {
    marginTop: "20px"
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid
        className={classes.registerContainer}
        container
        item
        xs={6}
        direction='column'
        justify='center'
        alignItems='center'>
        <Grid item>
          <Typography variant='h5'>Register</Typography>
        </Grid>
        <Grid
          container
          item
          display='column'
          justify='center'
          alignItems='center'>
          <form className={classes.root}>
            <Grid item>
              <TextField
                id='outlined-basic'
                label='Username'
                variant='outlined'
              />
            </Grid>
            <Grid item>
              <TextField id='outlined-basic' label='Email' variant='outlined' />
            </Grid>
            <Grid item>
              <TextField
                id='outlined-basic'
                label='handle'
                variant='outlined'
              />
            </Grid>
            <Grid item>
              <TextField
                id='outlined-basic'
                label='password'
                variant='outlined'
              />
            </Grid>
            <Grid item>
              <TextField
                id='outlined-basic'
                label='re-enter password'
                variant='outlined'
              />
            </Grid>
          </form>
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained'>
            Let's Get Started
          </Button>
        </Grid>
        <Grid item>
          <Typography variant='subtitle2' className={classes.registerContainer}>
            Don't have an account? <Link to='/login'>Sign Up</Link>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
