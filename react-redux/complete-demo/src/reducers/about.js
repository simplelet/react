import {GET_ABOUT_TEXT} from '../constants';

const initialState = {
	aboutText: ''
}

export const about = (state=initialState, action) => {
	switch (action.type) {
		case GET_ABOUT_TEXT:
			return {text: action.text};
		default:
			return state;
	}
}