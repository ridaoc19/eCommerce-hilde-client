import { Meta, StoryObj } from '@storybook/react';
import Change from './Change';

const meta: Meta<typeof Change> = {
	title: 'pages/auth/Change',
	component: Change,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
