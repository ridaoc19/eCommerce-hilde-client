import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import router from './routes/routes';
import './styles/app/app.scss';
import './styles/main/main.scss';
import WrapperApp from './components/WrapperApp';
import { StoreContext } from './hooks/useContext/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<StoreContext>
				<WrapperApp>
					<RouterProvider router={router} />
				</WrapperApp>
			</StoreContext>
		</Provider>
	</React.StrictMode>
);
