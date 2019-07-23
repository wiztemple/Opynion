import http from "../../utils/http";
// action types
import * as types from "../types";

// actions
export const getComments = () => async dispatch => {
  dispatch({ type: types.GET_COMMENTS_PENDING });
  const { data } = await http.get('comments');
  console.log(data);

  dispatch({ type: types.GET_COMMENTS_SUCCESS, payload: data });
};
