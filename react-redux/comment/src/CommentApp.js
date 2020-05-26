import React from 'react';
import CommentInput from './components/CommentInput';
import CommentList from './components/CommentList';

export default class CommentApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: []
		};
	}

	handleSubmitComment(comment) {
		console.log(comment);
		if (!comment) return;
		if (!comment.username) return alert('请输入用户名');
		if (!comment.content) return alert('请输入评论内容');
		this.state.comments.push(comment);
		this.setState({
			comments: this.state.comments
		});
		this._saveComments(comment);
	}

	_saveComments() {
		localStorage.setItem('comments', JSON.stringify(this.state.comments));
	}

	_loadComments() {
		let comments = localStorage.getItem('comments');
		if(comments) {
			comments = JSON.parse(comments);
			this.setState({
				comments
			});
		}
	}

	componentWillMount() {
		this._loadComments();
	}

	handleDeleteComment(index) {
		const {comments} = this.state;
		comments.splice(index.index, 1);
		this.setState({comments});
		this._saveComments(comments);
	}

	render() {
		return (
			<div className='wrapper'>
				{/*父传子*/}
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
				{/*子传父*/}
				<CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
			</div>
		);
	}
}
