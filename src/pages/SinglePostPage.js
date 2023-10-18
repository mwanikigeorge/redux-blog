import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import Post from "../components/Post";
import Comment from "../components/Comment";

// Import fetchPost action
import { fetchPost } from "../actions/postActions";
import { fetchComments } from "../actions/commentsActions";

export function SinglePost({
  match,
  dispatch,
  post,
  comments,
  hasErrors,
  loading,
}) {
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const renderPost = () => {
    if (loading.post) return <p>Loading post...</p>;
    if (hasErrors.post) return <p>Unable to display post.</p>;

    return <Post post={post} />;
  };

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>;
    if (hasErrors.comments) return <p>Unable to display comments.</p>;

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      {renderPost()}

      <h2>Comments</h2>
      {renderComments()}
    </section>
  );
}

const mapStateToProps = (state) => ({
  loading: { post: state.posts.loading, comments: state.comments.loading },
  post: state.post.post,
  comments: state.comments.comments,
  hasErrors: {
    post: state.posts.hasErrors,
    comments: state.comments.hasErrors,
  },
});

export default connect(mapStateToProps)(SinglePost);
