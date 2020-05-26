import React from 'react';

const User = ({match}) => {
	return(
			<div>User Id: {match.params.id}</div>
	);
}

export default User;