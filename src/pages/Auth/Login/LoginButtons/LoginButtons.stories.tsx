import { Meta, StoryObj } from '@storybook/react';
import LoginButtons from './LoginButtons';

const meta: Meta<typeof LoginButtons> = {
	title: 'pages/auth/Login/LoginButtons',
	component: LoginButtons,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
