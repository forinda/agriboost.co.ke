import React from 'react';

const imgs = {
	card: 'https://img.freepik.com/free-vector/digital-device-users-spending-time-together_74855-5234.jpg?w=1800&t=st=1674048890~exp=1674049490~hmac=becbed87437e6dc08c7c9f8499cca475356b65f77bf542b201ae45686ce346bb',
};

const NoChatCard = () => {
	return (
		<div className="flex items-center justify-center h-full">
			<div className="flex flex-col justify-center items-center py-4">
				<img
					src={imgs.card}
					alt={'No conversation'}
					className="w-1/3 aspect-square object-cover rounded-full"
				/>
				<h1>No Chat Selected</h1>
				<button>Start a new chat</button>
			</div>
		</div>
	);
};

export default NoChatCard;
