import http from "../../utils/http";
// action types
import * as types from "../types";

// actions
export const createPost = (formValues) => async dispatch => {
  const response = await http.post('/posts', formValues);

  dispatch({ type: types.CREATE_POST_SUCCESS, payload: response.data });
}
export const getPosts = (page) => async dispatch => {
  dispatch({ type: types.GET_POSTS_PENDING });
  const { data } = await http.get(`posts?_page=${page}&_limit=5`);

  dispatch({ type: types.GET_POSTS_SUCCESS, payload: data });
};

export const getSinglePost = id => async dispatch => {
  const response = await http.get(`posts/${id}`);

  dispatch({ type: types.GET_POST_SUCCESS, payload: response.data });
}

export const editPost = (id, formValues) => async dispatch => {
  const response = await http.put(`posts/${id}`, formValues);

  dispatch({ type: types.EDIT_POST_SUCCESS, payload: response.data });
}

export const deletePost = id => async dispatch => {
   await http.delete(`posts/${id}`);

  dispatch({ type: types.DELETE_POST_SUCCESS, payload: id });
}
