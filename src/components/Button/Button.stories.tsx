import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";
import { GitHubIcon } from "../Icon";

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
    variant: "primary",
  },
};

export const WithIconBefore: Story = {
  args: {
    variant: "primary",
    children: "Icon Before",
    iconBefore: <GitHubIcon />,
  },
};

export const WithIconAfter: Story = {
  args: {
    variant: "primary",
    children: "Icon After",
    iconAfter: <GitHubIcon />,
  },
};

export const IconButton: Story = {
  args: {
    variant: "primary",
    icon: <GitHubIcon />,
  },
};

export default meta;
