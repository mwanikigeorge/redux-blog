const GET_COMMENTS = "GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

const getComments = () => ({ type: GET_COMMENTS });
const getCommentsSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});
const getCommentsFailure = () => ({ type: GET_COMMENTS_FAILURE });

export function fetchComments(postId) {
  return async (dispatch) => {
    dispatch(getComments());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const data = await response.json();

      dispatch(getCommentsSuccess(data));
    } catch (error) {
      dispatch(getCommentsFailure());
    }
  };
}
