import React, {Component} from 'react';

export default class Select extends Component {

	constructor() {
		super();
		this.state = {postid: ''};
	}

	changePostid(postid) {
		this.props.getComments(postid);
		this.setState({postid});
	}

	render() {
		const {postidList} = this.props;
		return (
			<div>
				{postidList && postidList.length > 0 ?
					<div className="select">
						<div>CurrentPostId: {this.state.postid || 'all'}</div>
						<ul className="postid-list">
							{postidList.map((v, i) => <li onClick={this.changePostid.bind(this, v)} key={i}>{v}</li>)}
						</ul>
					</div>
				: ''}
			</div>
		);

	}
}
