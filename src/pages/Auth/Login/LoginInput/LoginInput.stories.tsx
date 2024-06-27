import { Meta, StoryObj } from '@storybook/react';
import LoginInput from './LoginInput';

const meta: Meta<typeof LoginInput> = {
	title: 'pages/auth/Login/LoginInput',
	component: LoginInput,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		stateLogin: {
			username: 'maximiliano@gmail.com',
			password: '1234',
		},
	},
};
