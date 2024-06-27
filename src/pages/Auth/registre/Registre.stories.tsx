import { Meta, StoryObj } from '@storybook/react';
import Registre from './Registre';

const meta: Meta<typeof Registre> = {
	title: 'pages/auth/Registre',
	component: Registre,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
