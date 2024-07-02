import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import router from './routes/routes';
import './styles/app/app.scss';
import './styles/main/main.scss';
import WrapperApp from './components/WrapperApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<WrapperApp>
				<RouterProvider router={router} />
			</WrapperApp>
		</Provider>
	</React.StrictMode>
);
