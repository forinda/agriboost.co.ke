import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ChatNewMessageError = () => {
	const error = useRouteError() as any;
	const navigate = useNavigate();
	return (
		<div className='h-full w-full flex items-center justify-center flex-col gap-4'>
			<h1>An error occured sending your message</h1>
			<button onClick={() => navigate(error?.from)} className="bg-blue-600 px-10 py-2 text-white rounded">Go back</button>
		</div>
	);
};

export default ChatNewMessageError;
