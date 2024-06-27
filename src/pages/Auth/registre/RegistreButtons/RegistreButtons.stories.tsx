import { Meta, StoryObj } from '@storybook/react';
import RegistreButtons from './RegistreButtons';

const meta: Meta<typeof RegistreButtons> = {
	title: 'pages/auth/Registre/RegistreButtons',
	component: RegistreButtons,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
