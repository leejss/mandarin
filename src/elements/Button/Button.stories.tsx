import React from "react";
import { Button } from "./Button";
import { ComponentMeta } from "@storybook/react";
import { Stack } from "../../layouts/Stack";

export default {
  title: "Element/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Colors = () => {
  return (
    <Stack vertical gutter={10}>
      <Button>Primary Button</Button>
      <Button color="secondary">Secondary Button</Button>
      <Button color="ok">Ok Button</Button>
      <Button color="danger">Danger Button</Button>
      <Button color="warning">Warning Button</Button>
    </Stack>
  );
};
