import React from 'react';
import { Outlet } from 'react-router-dom';
const WidthWrap=React.lazy(()=>import('../../../shared/components/WidthWrap'))
const ChatActivity=React.lazy(()=>import('./components/ChatActivity'))
const ChatSidebar=React.lazy(()=>import('./components/ChatSidebar'))

const BaseChat = () => {
	return (
		<div className='h-screen overflow-hidden'>
			<WidthWrap>
				<div>
					{/* Header */}
					<div className="border-b">
						{/* Logo */}
						{/* User */}
						{/* Settings */}
						<div
							className="flex justify-between py-4
                        "
						>
							<h1>Chat</h1>
							<div>@username</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-[1fr_2fr_1fr]">
					{/* Sidebar */}
					<ChatSidebar />
					{/* Single conversation */}
					<div className='p-4 h-[calc(100vh_-_6rem)]'>
                        <Outlet/>
                    </div>
					{/* Activity */}
					<ChatActivity />
				</div>
			</WidthWrap>
		</div>
	);
};

export default BaseChat;
