import React from 'react';

export default class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeString: ''
		};
	}

	componentWillMount() {
		this._updateTimeString();
		this.timer = setInterval(() => {
			this._updateTimeString();
		}, 5000)
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	_updateTimeString() {
		const {comment} = this.props;
		let duration = (+new Date() - comment.createTime) / 1000;
		this.setState({
			timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
		});
	}

	handleDeleteComment() {
		if(this.props.onDeleteComment) {
			const {index} = this.props;
			this.props.onDeleteComment({index});
		}
	}

	render() {
		return (
				<div className='comment'>
					<div className='comment-user'>
						<span>{this.props.comment.username} </span>：
					</div>
					<p dangerouslySetInnerHTML={{__html:this.props.comment.content}} />
					<span className='comment-createdtime'>
						{this.state.timeString}
					</span>
					<span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
				</div>
		);
	}
}
