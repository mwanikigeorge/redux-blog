import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: postReducer,
});

export default rootReducer;
