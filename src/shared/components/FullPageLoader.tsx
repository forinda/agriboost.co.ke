import React from 'react';

const FullPageLoader = () => {
	return (
		<div className="flex items-center justify-center h-screen z-[2000] fixed-top bg-gray-200 bg-opacity-50">
			<div className="flex flex-col items-center justify-center space-y-4">
				<div className="w-20 h-20 border-8 border-t-4 border-r-green-500 border-t-yellow-500 border-l-blue-500 border-b-red-500 rounded-full animate-spin"></div>
				<div className="text-gray-500">Loading...</div>
			</div>
		</div>
	);
};

export default FullPageLoader;
