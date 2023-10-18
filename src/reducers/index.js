import { combineReducers } from "redux";
import postsReducer from "./postReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
