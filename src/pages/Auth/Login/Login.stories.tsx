import { Meta, StoryObj } from '@storybook/react';
import Login from './Login';

const meta: Meta<typeof Login> = {
	title: 'pages/auth/Login',
	component: Login,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
