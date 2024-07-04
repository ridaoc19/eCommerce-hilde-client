import { Meta, StoryObj } from '@storybook/react';
import SidebarRight from './SidebarRight';

const meta: Meta<typeof SidebarRight> = {
	title: 'components/layout/sidebar/SidebarRight',
	component: SidebarRight,
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
