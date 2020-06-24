import React from "react";
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
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Grid container justify='center' alignItems='center'>
      <Grid
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
          <Grid item>
            <Button color='primary' variant='contained'>
              Let's Get Started
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
