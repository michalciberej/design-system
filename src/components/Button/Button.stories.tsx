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
    disabled: false,
  },
};

export const WithIconBefore: Story = {
  args: {
    variant: "primary",
    children: "Icon Before",
    iconBefore: <GitHubIcon />,
    disabled: true,
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
    icon: <GitHubIcon />,
    disabled: false,
  },
};

export const IconButtonDisabled: Story = {
  args: {
    size: "small",
    icon: <GitHubIcon />,
    disabled: true,
  },
};

export default meta;
