import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Posts = (props) => {
  const { showPosts, postList } = props;
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {showPosts ? renderPostsList(postList) : <span>posts loading...</span>}
      </ul>
    </div>
  );
};

const renderPostsList = (posts) =>
  posts.map((post) => (
    <li id={uuidv4() + "-post"} key={uuidv4() + "-post"}>
      {post.title}
    </li>
  ));

const mapStateToProps = (state, props) => {
  const { userComponent: usersData } = state;
  return {
    postList: usersData.userPosts,
    showPosts: !usersData.userPostsLoading
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
