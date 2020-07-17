import {
  GET_TWEETS,
  GET_TWEETS_BY_ME,
  GET_TWEETS_BY_USER,
  CLEAR_TWEET,
  CLEAR_TWEETS
} from "../actions/types";

const initialState = {
  tweet: null,
  tweets: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TWEETS:
      return {
        ...state,
        tweets: payload,
        loading: false
      };

    case CLEAR_TWEET:
      return {
        ...state,
        tweet: null,
        loading: true
      };

    case CLEAR_TWEETS:
      return {
        ...state,
        tweets: [],
        loading: false
      };

    default:
      return state;
  }
};
