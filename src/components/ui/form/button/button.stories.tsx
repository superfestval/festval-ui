import React from "react";
import { Meta } from "@storybook/react";

import { Button, ButtonProps } from ".";

export default {
  component: Button,
  title: "Forms/Button",
  argTypes: {
    variant: {},
  },
} as Meta<ButtonProps>;

const Template = ({ ...props }) => <Button {...props}>Button</Button>;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Link = Template.bind({});
Link.args = {
  variant: "link",
  as: "a",
  href: "#",
};
