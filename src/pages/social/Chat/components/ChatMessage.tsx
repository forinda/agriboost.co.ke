import React from 'react';

const ChatMessage = () => {
	// Scroll to bottom
	const chatMessagesRef = React.useRef<HTMLDivElement | null>(null);
	const renderRef = React.useRef<boolean>(false);

	React.useEffect(() => {
		if (!renderRef.current) {
			chatMessagesRef.current?.scrollIntoView();
			renderRef.current = true;
		}
		return () => {
			renderRef.current = false;
		};
	}, []);
	return (
		<div ref={chatMessagesRef} className="odd:pr-[50%] even:pl-[50%] ">
			<div className="border mx-1 rounded-md p-2 shadow-lg bg-white">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
					eveniet!
				</p>
			</div>
		</div>
	);
};

export default ChatMessage;
