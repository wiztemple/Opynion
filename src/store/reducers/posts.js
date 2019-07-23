// action types
import * as types from "../types";

const initialState = {
  loading: false,
  posts: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_POSTS_PENDING:
      return {
        ...state,
        loading: true,
      };

    case types.GET_POSTS_SUCCESS: {
      const { posts } = state;
      return {
        ...state,
        loading: false,
        posts: [...posts, ...payload]
      };
    }
  
    case types.GET_COMMENTS_SUCCESS:
      const postId = localStorage.getItem('postId');
      let { posts } = state;
  
      posts = posts.map(post => {
        if (post.id === Number(postId)) {
          post.comments = payload;
        }
        return post;
      });
  
      return {
        ...state,
        posts
      }
    
    case types.GET_POST_SUCCESS:
      return { ...state, [payload.id]: payload };
    
    case types.CREATE_POST_SUCCESS:
      return { ...state, [payload.id]: payload };
    
    case types.EDIT_POST_SUCCESS:
      return { ...state, [payload.id]: payload };
    
    case types.DELETE_POST_SUCCESS:
      return { ...state, payload };

    default:
      return state;
  }
};
