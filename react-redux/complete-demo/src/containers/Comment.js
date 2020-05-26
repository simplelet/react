import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getComments} from '../actions/Comment';
import Commnet from '../components/Comment';
// import Select from '../components/Select';
import '../style/comment.css';

class Comment extends Component {

	constructor() {
		super();
		this.state = {postid: ''};
	}

	changePostid(postid) {
		this.props.getComments(postid);
		this.setState({postid});
	}

	componentDidMount() {
		this.props.getComments();
	}

	render() {
		//comments里的childToParent字段是从'./components/comment'里传递来的
		const {comments} = this.props;
		console.log(comments);
		let postidList = ["all", 1, 2, 3, 4, 5, 6];
		return (
			<div className="comment-wrap">
				<div className="comment-select">
					{postidList && postidList.length > 0 ?
						<div className="select">
							<div>CurrentPostId: {this.state.postid || 'all'}</div>
							<div className="postid-list">
								{postidList.map((v, i) => <span className="postid-item" onClick={this.changePostid.bind(this, v)} key={i}>{v}</span>)}
							</div>
						</div>
					: ''}
				</div>
				<div className="comment-list">
					{comments && comments.map((v) => <Commnet key={v.id} comment={v} />)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comment.comments
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getComments: bindActionCreators(getComments, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
