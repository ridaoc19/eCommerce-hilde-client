import { Meta, StoryObj } from '@storybook/react';
import Sidebar from './Sidebar';
import Layout from '../../Layout';

const meta: Meta<typeof Sidebar> = {
	title: 'components/layout/navbar/Sidebar',
	component: Sidebar,
	decorators: [
		Story => (
			<Layout>
				<Story />
			</Layout>
		),
	],
	tags: ['autodocs'],
	argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
