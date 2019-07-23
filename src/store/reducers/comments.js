// action types
import * as types from "../types";

const initialState = {
  loading: false,
  comments: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_COMMENTS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false ,
      };
  }
  return state;
};
