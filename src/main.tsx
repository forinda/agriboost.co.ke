import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import './index.css';
import MessageProvider from './providers/messaging';
import AppProvider from './providers/state';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<MessageProvider>
				<App />
			</MessageProvider>
		</AppProvider>
	</React.StrictMode>,
);
