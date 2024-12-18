import { Meta, StoryObj } from "@storybook/react";

import { Card, RootProps } from "./index";
import { Text } from "@/components/typograph/text";
import { Heading } from "@/components/typograph/heading";

export default {
  component: Card.Root,
  render: () => (
    <Card.Root>
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
} as Meta<RootProps>;

export const Default: StoryObj<RootProps> = {};
Default.args = {};
