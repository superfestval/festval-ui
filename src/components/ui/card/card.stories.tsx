import { Meta, StoryObj } from "@storybook/react";

import { Card, CardRootProps } from "./index";
import { Text } from "@/components/typograph/text";
import { Heading } from "@/components/typograph/heading";

export default {
  component: Card.Root,
  render: ({ ...rest }) => (
    <Card.Root {...rest}>
      <Card.Header>
        <Heading>Card</Heading>
      </Card.Header>
      <Card.Body>
        <Text>Card example</Text>
      </Card.Body>
      <Card.CardFooter>
        <Text>Card Card</Text>
      </Card.CardFooter>
    </Card.Root>
  ),
  title: "Display/Card",
  args: {},
  argTypes: {},
  tags: ["autodocs"],
} as Meta<CardRootProps>;

export const Default: StoryObj<CardRootProps> = {};
Default.args = {};
