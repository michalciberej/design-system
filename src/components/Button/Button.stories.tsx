import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: { variant: "primary" },
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: { variant: "secondary" },
  },
};

export default meta;
