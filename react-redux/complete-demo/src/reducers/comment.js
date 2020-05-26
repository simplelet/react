import {GET_COMMENTS, GET_POSTID_COMMENTS} from '../constants';

const initialState = {
	comments: []
}

export const comment = (state=initialState, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			return {comments: action.comments};
		case GET_POSTID_COMMENTS:
			return {comments: action.postidComments};
		default:
			return state;
	}
}