import React from 'react';
import { Link } from 'react-router-dom';

const imgs = {
	profilePic:
		'https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?w=826',
};

type UserChatCardProps = {
	id: string|number;
};

const UserChatCard: React.FunctionComponent<UserChatCardProps> = ({ id }) => {
	return (
		<Link to={'/social/chat/' + id} className="shadow rounded">
			<div className="flex items-center">
				<div className="flex-shrink-0">
					<img
						className="h-10 w-10 rounded-full"
						src={imgs.profilePic}
						alt=""
					/>
				</div>
				<div className="ml-4">
					<div className="text-sm font-medium text-gray-900">
						<h1>John Doe</h1>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default UserChatCard;
