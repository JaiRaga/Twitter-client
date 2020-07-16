import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { CircleLoader } from "react-spinners";
import Tweets from "../tweets/Tweets";
import Tweet from "../tweet/Tweet";
import { getAllTweets } from "../../Redux/actions/tweet";

const style = {
  Margin: {
    marginTop: 10
  }
};

const Dashboard = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const tweet = useSelector((state) => state.tweet);
  const { loading, tweets, error } = tweet;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets());
  }, [tweets]);

  // console.log(tweet);

  return (
    <Grid container justify='center' alignItems='center' style={style.Margin}>
      <Grid container direction='column' spacing={2} item xs={12} sm={8} md={5}>
        <Tweet />
        {loading || !tweets ? (
          <CircleLoader loading />
        ) : (
          <Tweets tweets={tweets} />
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
