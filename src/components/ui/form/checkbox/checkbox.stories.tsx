import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "./index";
import { fn } from "@storybook/test";

export default {
  component: (props) => <Checkbox {...props} />,
  title: "Forms/Checkbox",
  args: {
    disabled: false,
    value: false,
    defaultChecked: false,
    onValueChange: fn(),
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    value: {
      control: {
        type: "boolean",
      },
    },
    defaultChecked: {
      control: {
        type: "boolean",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<CheckboxProps>;

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    value: true,
    disabled: false,
  },
};

export const Unchecked: StoryObj<CheckboxProps> = {
  args: {
    value: false,
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    value: false,
    disabled: true,
  },
};

export const Multiple: StoryObj<CheckboxProps> = {
  render: () => {
    const [keys, setKeys] = useState<number[]>([]);

    const select = (key: number) => {
      if (keys.includes(key)) {
        setKeys(keys.filter((value) => value !== key));

        return;
      }

      setKeys((prev) => [...prev, key]);
    };

    const selectAll = () => {
      if (keys.length >= 5) {
        setKeys([]);

        return;
      }

      setKeys([0, 1, 2, 3, 4]);
    };

    return (
      <table>
        <thead>
          <tr>
            <th className="border-b border-b-gray-600 p-2">
              <Checkbox onValueChange={() => selectAll()} />
            </th>
            <th className="border-b border-b-gray-600 p-2">
              <p>Title</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index}>
              <td className="border-b border-b-gray-600 p-2">
                <Checkbox
                  defaultChecked={keys.includes(index)}
                  onValueChange={() => select(index)}
                />
              </td>
              <td className="border-b border-b-gray-600 p-2">
                <p>Example {index}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  },
  args: {
    value: false,
    disabled: true,
  },
};
