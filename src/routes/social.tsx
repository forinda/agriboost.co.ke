import FullPageLoader from '@shared-comps/FullPageLoader';
import React from 'react';
import { RouteObject } from 'react-router-dom';
import NoChatCard from '@social-pages/Chat/components/NoChatCard';

const ChatLayout = React.lazy(() => import('@social-pages/Chat/ChatLayout'));
const BaseChat = React.lazy(() => import('@social-pages/Chat/BaseChat'));
const LandingPage = React.lazy(() => import('@social-pages/LandingPage'));
const ChatNewMessageError= React.lazy(() => import('@social-pages/Chat/errors/ChatNewMessageError'));
const SingleConversation = React.lazy(() => import('@social-pages/Chat/components/SingleConversation'));

export const SocialRoutes: RouteObject = {
	path: '/social',
	children: [
		{
			path: '/social',
			element: (
				<React.Suspense fallback={<FullPageLoader />}>
					<LandingPage />
				</React.Suspense>
			),
		},
		{
			path: '/social/chat',
			element: (
				<React.Suspense fallback={<FullPageLoader />}>
					{' '}
					<ChatLayout />{' '}
				</React.Suspense>
			),
			children: [
				{
					path: '/social/chat',
					element: <BaseChat />,
					errorElement: <>Error</>,
					children: [
						{
							path: '/social/chat/',
							element: <NoChatCard />,
						},
						{
							path: '/social/chat/:chatId',
							element: <SingleConversation />,
							errorElement: <ChatNewMessageError />,
						},
						{
							id: '/social/chat/:id/new',
						},
					],
				},
			],
		},
	],
};

export default SocialRoutes;
