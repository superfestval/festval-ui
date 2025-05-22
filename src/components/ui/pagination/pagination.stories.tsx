import { Meta, StoryObj } from "@storybook/react";

import { Pagination, PaginationProps } from "./index";
import { fn } from "@storybook/test";

export default {
  component: Pagination,
  title: "Surfaces/Pagination",
  tags: ["autodocs"],
  args: {
    totalCount: 100,
    perPage: 10,
    onPageChange: fn(),
    onPerPageChange: fn(),
  },
} as Meta<PaginationProps>;

export const Default: StoryObj<PaginationProps> = {
  render: ({ ...rest }) => <Pagination {...rest} />,
};
