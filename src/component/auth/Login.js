import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  loginContainer: {
    marginTop: "20px"
  }
}));

const Login = () => {
  const classes = useStyles();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
    errors: {}
  });

  console.log(loginState);

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid
        className={classes.loginContainer}
        container
        item
        xs={6}
        direction='column'
        justify='center'
        alignItems='center'>
        <Grid item>
          <Typography variant='h5'>Login</Typography>
        </Grid>
        <Grid
          container
          item
          display='column'
          justify='center'
          alignItems='center'>
          <form className={classes.root}>
            <Grid item>
              <TextField id='outlined-basic' label='email' variant='outlined' />
            </Grid>
            <Grid item>
              <TextField
                id='outlined-basic'
                label='password'
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
      </Grid>
    </Grid>
  );
};

export default Login;
