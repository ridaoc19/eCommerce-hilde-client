import { Meta, StoryObj } from '@storybook/react';
import SidebarIcon from './SidebarIcon';

const meta: Meta<typeof SidebarIcon> = {
	title: 'components/layout/sidebar/SidebarIcon',
	component: SidebarIcon,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
