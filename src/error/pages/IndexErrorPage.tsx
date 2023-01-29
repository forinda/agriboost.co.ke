import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const IndexErrorPage = () => {
	const error = useRouteError() as any;
	return (
		<div className="flex justify-center min-h-screen w-full items-center bg-gray-300">
			<div className="flex flex-col gap-4 p-4 bg-white rounded-md shadow-md">
				<h1 className="text-2xl font-bold">Error</h1>
				<p className="text-gray-500">
					An error occurred while loading the page. Please try again later.
				</p>
				<Link to="/" className="text-blue-500">
					Back to home
				</Link>
				<pre>{JSON.stringify(error, null, 2)}</pre>
			</div>
		</div>
	);
};

export default IndexErrorPage;
