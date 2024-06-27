import { Meta, StoryObj } from '@storybook/react';
import Reset from './Reset';

const meta: Meta<typeof Reset> = {
	title: 'pages/auth/Reset',
	component: Reset,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
