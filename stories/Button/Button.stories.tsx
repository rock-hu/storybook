// stories/MyButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import {MyButton} from '../../components/Button/Button';

const meta = {
  title: 'components/MyButton',
  component: MyButton,
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
    color: 'purple',
    onPress: fn(),
  },
};
