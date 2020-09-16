import {
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
  SET_USER_AUTH_STATUS,
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_SELECTED_USER_DETAILS
} from "./actionConst";

const initialState = {
  allUsers: [],
  isAllUserDataLoading: false,
  selectedUser: {},
  isUserDataLoading: false,
  userPosts: [],
  userPostsLoading: false,
  userAuthStatus: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return { ...state, allUsers: [], isAllUserDataLoading: true };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        isAllUserDataLoading: false
      };
    case FETCH_ALL_USERS_FAILURE:
      return { ...state, allUsers: [], isAllUserDataLoading: false };
    case SET_USER_AUTH_STATUS:
      return { ...state, userAuthStatus: action.payload };
    case FETCH_USER_POSTS:
      return { ...state, userPosts: [], userPostsLoading: true };
    case FETCH_USER_POSTS_SUCCESS:
      return { ...state, userPosts: action.payload, userPostsLoading: false };
    case FETCH_USER_POSTS_FAILURE:
      return { ...state, userPosts: [], userPostsLoading: false };
    case FETCH_SELECTED_USER_DETAILS:
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
}
