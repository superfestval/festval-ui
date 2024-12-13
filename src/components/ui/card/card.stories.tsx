import { Meta, StoryObj } from "@storybook/react";

import { Card, RootProps } from "./index";

export default {
  component: Card.Root,
  render: () => (
    <Card.Root>
      <Card.Header>
        <Card.Heading>Card</Card.Heading>
      </Card.Header>
      <Card.Body>
        <Card.Text>Card example</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>Card footer</Card.Text>
      </Card.Footer>
    </Card.Root>
  ),
  title: "Display/Card",
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<RootProps>;

export const Default: StoryObj<RootProps> = {};
Default.args = {};
