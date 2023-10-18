import React, { useEffect } from "react";

import { connect } from "react-redux";
import Post from "../components/Post";

// Import fetchPost action
import { fetchPosts } from "../actions/postsActions";

const PostPage = ({ dispatch, loading, posts, hasError }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasError) return <p>Unable to display posts.</p>;
    return posts.map((post) => <Post key={post.id} post={post}></Post>);
  };
  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasError: state.posts.hasError,
});

export default connect(mapStateToProps)(PostPage);