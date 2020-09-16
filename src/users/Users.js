import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllUsersList,
  setAuthStatus,
  setSelectedUser,
  fetchUserPosts
} from "../redux/users/actions";
import { v4 as uuidv4 } from "uuid";
import Posts from "./Posts";

class Users extends Component {
  componentDidMount() {
    console.log(this.props);
    const { fetchAllUsersList } = this.props;
    fetchAllUsersList();
  }

  selectUser = (id) => {
    const { setAuthStatus, setSelectedUser, allUsers } = this.props;
    let user = allUsers.find((user) => user.id === id);
    setAuthStatus(true);
    setSelectedUser(user);
  };

  getUserPosts = (id) => {
    console.log(id);
    const { fetchUserPosts } = this.props;
    fetchUserPosts(id);
  };

  renderAllUsersList = () => {
    const { allUsers } = this.props;
    return allUsers.map((user) => (
      <div id={uuidv4() + "-allUsers"} key={uuidv4() + "-allUsers"}>
        <span onClick={() => this.selectUser(user.id)}>{user.name}</span>
        <b> get todos </b>
        <b onClick={() => this.getUserPosts(user.id)}> get posts </b>
      </div>
    ));
  };

  render() {
    return (
      <div>
        {this.renderAllUsersList()}
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state, props);
  const { userComponent: usersData } = state;
  return {
    allUsers: usersData.allUsers
  };
};
const mapDispatchToProps = {
  fetchAllUsersList,
  setAuthStatus,
  setSelectedUser,
  fetchUserPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
