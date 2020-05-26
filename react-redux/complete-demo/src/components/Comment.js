import React, {Component} from 'react';
import '../style/commentItem.css';

export default class Comment extends Component {
	render() {
		this.props.comment.childToParent = 'childToParent-Test';
		const {id, name, postId} = this.props.comment;
		return (
				<div className="comment-item">
					<div>id: {id}</div>
					<div>postId: {postId}</div>
					<div>name: {name}</div>
				</div>
		);
	}
}
