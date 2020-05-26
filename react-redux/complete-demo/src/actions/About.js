import {GET_ABOUT_TEXT} from '../constants';

export const getAboutText = () => (dispatch, getState) => {
	dispatch({type: GET_ABOUT_TEXT, text: "This is about page"});
}
