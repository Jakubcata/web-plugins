import { Dummy } from '../Dummy';
import { StoryObj } from '@storybook/react';

const meta = {
    title: '@jakubcata/Dummy/components/Dummy',
    component: Dummy,
    args: {
        dummyText: 'Dummy text',
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
