import React from 'react';

export default class CommentInput extends React.Component {
	static  defaultProps = {
		username: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			username: props.username,
			content: '',
			// createTime: +new Date()
		};
	}

	handleUsernamChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	handleContentChange(e) {
		this.setState({
			content: e.target.value
		});
	}

	handleUsernameBlur(e) {
		// this._saveUsername(e.target.value)
		if (this.props.onUserNameInputBlur) {
			this.props.onUserNameInputBlur(e.target.value)
		}
	}

	// _saveUsername(username) {
	// 	localStorage.setItem('username', username);
	// }
	//
	// _loadUsername() {
	// 	const username = localStorage.getItem('username');
	// 	if(username) {
	// 		this.setState({
	// 			username
	// 		});
	// 	}
	// }

	handleSubmit() {
		if(this.props.onSubmit) {
			let createTime = +new Date();
			const {username, content} = this.state;
			this.props.onSubmit({username, content, createTime});
		}
		this.setState({
			content: ''
		});
	}

	// componentWillMount() {
	// 	this._loadUsername();
	// }

	componentDidMount() {
		this.textareaDom.focus();
	}

	render() {
		return (
				<div className='comment-input'>
					<div className='comment-field'>
						<span className='comment-field-name'>用户名：</span>
						<div className='comment-field-input'>
							<input value={this.state.username} onChange={this.handleUsernamChange.bind(this)}
										 onBlur={this.handleUsernameBlur.bind(this)}/>
						</div>
					</div>
					<div className='comment-field'>
						<span className='comment-field-name'>评论内容：</span>
						<div className='comment-field-input'>
							<textarea value={this.state.content} onChange={this.handleContentChange.bind(this)}
												ref={(textareaDom) => this.textareaDom = textareaDom} />
						</div>
					</div>
					<div className='comment-field-button'>
						<button onClick={this.handleSubmit.bind(this)}>发布</button>
					</div>
				</div>
		);
	}
}
