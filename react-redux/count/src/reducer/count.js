import { INCREASE, DECREASE, COUNTFEED } from '../action/actions';

const initialState = {
	count: 0
};

export const countReducer = (state=initialState, action) => {
	console.log('reducer', state, action);

	switch(action.type) {
		case INCREASE:
			return {count: state.count + 1};
		case DECREASE:
			return {count: state.count - 1};
		case COUNTFEED:
			return {count: action.data.count};  //dispatch({type: COUNTFEED, data}) 时传入的feed数据
		default:
			return state;
	}
}

export const increaseAction = () => {
	return {type: INCREASE};
}

export const decreaseAction = () => {
	return {type: DECREASE};
}



