import {COUNTFEED} from './actions';

export const getCountFeed = () => (dispatch, getState) => {
	//count.json与public/index同级
	fetch('./count.json')
			.then(res => res.json())
			.then(data => dispatch({type: COUNTFEED, data})) //拿到feed数据dispatch，触发reducer更新state
			.catch(error => console.log(error))
}
