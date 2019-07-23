import { combineReducers } from "redux";

// reducers
import posts from "./reducers/posts";
import comments from "./reducers/comments";

const rootReducers = combineReducers({
  posts,
  comments
});

export default rootReducers;
