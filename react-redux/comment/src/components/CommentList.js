import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {
	static defaultProps = {
		comments: []
	}

	constructor(props) {
		super(props);
		this.state = {

		};
	}

	handleDeleteComment(obj) {
		if(this.props.onDeleteComment) {
			const {index} = obj;
			this.props.onDeleteComment({index});
		}
	}

	render() {
		console.log(this.props.comments);
		return (
				<div>
					{this.props.comments.map((comment, i) => <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />)}
				</div>
		);
	}
}
