import React, {Component} from 'react';

class MainContainer extends Component {
	render (){
		return (
			<div> Welcome {this.props.username}! Here is your news!</div>
			)
	}
}

export default MainContainer;