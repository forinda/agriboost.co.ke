import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
/*@ts-ignore*/
const ReactEmojiTextArea = React.lazy(() => import('react-input-emoji'));
import { Form } from 'react-router-dom';

const ConversationMessages =React.lazy(() => import('./ConversationMessages'));
const SingleConversationHeader =React.lazy(() => import('./SingleConversationHeader'));

const SingleConversation = () => {
	return (
		<div className="h-full flex flex-col bg-neutral-200">
			{/* Chat Header */}
			<SingleConversationHeader />
			{/* Messages */}
			<ConversationMessages />
			{/* Chat panel */}
			<Form method='post'  className="flex items-center gap-4 border-t w-full">
				<div className="flex-1">
					<ReactEmojiTextArea
						onChange={(e:any) => console.log(e)}
                        placeholder="Type message....." value={''} clearText={false}	 className="resize-none border border-slate-400 focus:ring-0 focus:border-slate-400 focus:border-none w-full"
					/>
				</div>
				<button type='submit' className="flex items-center justify-center px-4">
					<FaPaperPlane className="text-2xl" />
				</button>
			</Form>
		</div>
	);
};

export default SingleConversation;
