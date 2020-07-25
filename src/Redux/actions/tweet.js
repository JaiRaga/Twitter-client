import axios from "axios";
import {
  GET_TWEETS,
  POST_TWEET,
  GET_TWEETS_BY_ME,
  GET_TWEETS_BY_USER,
  TWEET_ERROR,
  AUTH_ERROR,
  CLEAR_TWEETS,
  DELETE_TWEET,
  UPDATE_LIKES,
  LIKE_ERROR
} from "./types";

// Get all tweets on dashboard
export const getAllTweets = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/tweets");

    dispatch({
      type: GET_TWEETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: TWEET_ERROR });
  }
};

// Get tweets by me
export const getTweetsByMe = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/tweets/me");
    // console.log(res);
    dispatch({
      type: GET_TWEETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Get tweet by a User

// Add/Post tweet
export const postTweet = (tweet) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ text: tweet });

  try {
    const res = await axios.post("/api/tweet", body, config);
    dispatch({ type: POST_TWEET, payload: res.data });
    // dispatch(getAllTweets());
  } catch (err) {
    dispatch({ type: TWEET_ERROR });
  }
};

// Delete tweet
export const deleteTweet = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/tweet/${id}`);

    dispatch({ type: DELETE_TWEET, payload: id });
  } catch (err) {
    dispatch({ type: TWEET_ERROR });
  }
};

// Add Like
export const addLike = (tweetId) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/like/${tweetId}`);
    console.log(res.data);
    dispatch({ type: UPDATE_LIKES, payload: { tweetId, likes: res.data } });
  } catch (err) {
    dispatch({ type: LIKE_ERROR });
  }
};

// Remove Like

// Add Comment

// Remove Comment

// Share Tweet

// UnShare Tweet
