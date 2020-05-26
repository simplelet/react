import {GET_COMMENTS, GET_POSTID_COMMENTS} from '../constants';

export const getComments = (postid) => (dispatch, getState) => {
	fetch('https://jsonplaceholder.typicode.com/comments')
		.then(res => res.json())
		.then(data => {
			const comments = data.slice(0, 30);
			let postidComments = [];
			if(!postid || postid === "all") {
				dispatch({type: GET_COMMENTS, comments});
			} else {
				postidComments = comments.filter((comment) => comment.postId === postid);
				dispatch({type: GET_POSTID_COMMENTS, postidComments});
			}
		});
}
