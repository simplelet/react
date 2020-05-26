import {combineReducers} from 'redux';
import {comment} from './comment';
import {about} from './about';

export default combineReducers({
	comment,
	about
});
