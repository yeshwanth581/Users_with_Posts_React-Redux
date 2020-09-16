import actionCreator from "../actionUtil";
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

const fetchAllUsersAction = () => actionCreator(FETCH_ALL_USERS);
const fetchAllUsersSuccessAction = (usersList) =>
  actionCreator(FETCH_ALL_USERS_SUCCESS, usersList);
const fetchAllUsersFailureAction = actionCreator(FETCH_ALL_USERS_FAILURE);

const fetchUserPostsAction = () => actionCreator(FETCH_USER_POSTS);
const fetchUserPostsSuccessAction = (userPosts) =>
  actionCreator(FETCH_USER_POSTS_SUCCESS, userPosts);
const fetchUserPostsFailureAction = actionCreator(FETCH_USER_POSTS_FAILURE);

export const setAuthStatus = (status) =>
  actionCreator(SET_USER_AUTH_STATUS, status);

export const setSelectedUser = (userData) =>
  actionCreator(FETCH_SELECTED_USER_DETAILS, userData);

export const fetchAllUsersList = () => (dispatch) => {
  dispatch(fetchAllUsersAction());
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchAllUsersSuccessAction(data));
    })
    .catch((err) => {
      dispatch(fetchAllUsersFailureAction());
    });
};

export const fetchUserPosts = (id) => (dispatch) => {
  dispatch(fetchUserPostsAction());
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((res) => res.json())
    .then((data) => {
      dispatch(fetchUserPostsSuccessAction(data));
    })
    .catch((err) => {
      dispatch(fetchUserPostsFailureAction());
    });
};
