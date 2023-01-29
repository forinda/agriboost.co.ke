import React from 'react';

const SingleConversationHeader = () => {
	return (
		<div className="flex justify-between py-4 px-2 bg-neutral-100 rounded-md shadow-sm">
			<h1>Chat</h1>
			<div>@username</div>
		</div>
	);
};

export default SingleConversationHeader;
