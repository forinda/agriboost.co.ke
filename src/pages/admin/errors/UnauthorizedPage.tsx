import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
	return (
		<div className="flex justify-center min-h-screen w-full items-center bg-gray-300">
			<div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow-md">
				<h1 className="text-2xl font-bold">Error</h1>
				<p className="text-gray-500">
					Page not available. Please try again later.
				</p>
				<Link to="/" className="text-blue-500">
					Back to home
				</Link>
				<pre className='flex w-full justify-center'><code className='bg-black text-white font-mono p-4 rounded-lg'>agriboost@{moment().calendar()}</code></pre>
			</div>
		</div>
	);
};

export default UnauthorizedPage;
