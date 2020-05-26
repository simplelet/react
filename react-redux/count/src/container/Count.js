import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increaseAction, decreaseAction } from '../reducer/count';
import { getCountFeed } from '../action/Count';

class Count extends Component {

	increase() {
		//未mapDispatchToProps的用法 this.props.dispatch(decreaseAction());
		//mapDispatchToProps将action绑定到props
		this.props.increaseAction();
	}

	decrease() {
		this.props.decreaseAction();
	}

	componentDidMount() {
		this.props.getCountFeed();
	}

	render() {
		return (
			<div>
				<div>{this.props.count}</div>
				<button onClick={this.increase.bind(this)}>+</button>
				<button onClick={this.decrease.bind(this)}>-</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {count: state.count};
}

//mapDispatchToProps可以是个对象，也可以是个函数
//this.props.dispatch(decreaseAction()) => this.props.decreaseAction()
const mapDispatchToProps = (dispatch) => {
	return {
		increaseAction: bindActionCreators(increaseAction, dispatch),
		decreaseAction: bindActionCreators(decreaseAction, dispatch),
		getCountFeed: bindActionCreators(getCountFeed, dispatch)
	}
}
// const mapDispatchToProps = {
// 	increaseAction,
// 	decreaseAction
// }

export default connect(mapStateToProps, mapDispatchToProps)(Count);