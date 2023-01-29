import React from 'react';
const UserChatCard = React.lazy(() => import('./UserChatCard'));

const Conversations = () => {
	return (
		<div className='h-1/2'>
			<h1>Chats</h1>
			<div className='flex flex-col gap-2 overflow-y-scroll p-2'>
				{[1, 2, 3, 4].map((item, index) => (
					<UserChatCard key={item} id={item}/>
				))}
			</div>
		</div>
	);
};

export default Conversations;
