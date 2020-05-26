import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getAboutText} from '../actions/About';

class About extends Component {

	componentDidMount() {
		this.props.getAboutText();
	}

	render() {
		return (
				<div className="about-wrap">
					{this.props.aboutText}
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		aboutText: state.about.text
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getAboutText: bindActionCreators(getAboutText, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
