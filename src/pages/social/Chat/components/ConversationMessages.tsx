import React from 'react';
const ChatMessage = React.lazy(() => import('./ChatMessage'));

const ConversationMessages = () => {
	const chatMessagesRef = React.useRef<HTMLDivElement | null>(null);
	const renderRef = React.useRef<boolean>(false);

	React.useEffect(() => {
		if (renderRef.current) {
			chatMessagesRef.current?.scrollIntoView();
			renderRef.current = true;
		}
		return () => {
			renderRef.current = false;
		};
	}, []);
	return (
		<div
			ref={chatMessagesRef}
			className="w-full overflow-scroll h-full no-scrollbar p-4"
		>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
				<ChatMessage key={item} />
			))}
		</div>
	);
};

export default ConversationMessages;
