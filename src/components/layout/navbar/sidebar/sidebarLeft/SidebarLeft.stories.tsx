import { Meta, StoryObj } from '@storybook/react';
import SidebarLeft from './SidebarLeft';

const meta: Meta<typeof SidebarLeft> = {
	title: 'components/layout/sidebar/SidebarLeft',
	component: SidebarLeft,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
