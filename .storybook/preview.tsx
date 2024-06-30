import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withRouter } from 'storybook-addon-remix-react-router';
import type { Preview } from '@storybook/react';
import '../src/styles/app/app.scss';
import '../src/styles/main/main.scss';

const preview: Preview = {
	decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
		withRouter,
	],
	parameters: {
		viewport: {
			viewports: {
				...INITIAL_VIEWPORTS,
				...MINIMAL_VIEWPORTS,
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
