import { Meta, StoryObj } from '@storybook/react';
import RegistreInput from './RegistreInput';

const meta: Meta<typeof RegistreInput> = {
	title: 'pages/auth/Registre/RegistreInput',
	component: RegistreInput,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		stateRegistre: {
			username: 'maximiliano@gmail.com',
			password: '1234',
		},
	},
};
