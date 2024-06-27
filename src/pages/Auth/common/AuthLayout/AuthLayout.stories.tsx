import { Meta, StoryObj } from '@storybook/react';
import AuthLayout from './AuthLayout';

const meta: Meta<typeof AuthLayout> = {
	title: 'pages/auth/common/AuthLayout',
	component: AuthLayout,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
