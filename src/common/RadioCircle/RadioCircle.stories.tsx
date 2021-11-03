import React from "react";
import { RadioCircle } from "./RadioCircle";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Common/RadioCircle",
  component: RadioCircle,
} as ComponentMeta<typeof RadioCircle>;

export const Basic = () => {
  return (
    <div>
      <h3>On</h3>
      <RadioCircle on />
      <h3>Off</h3>
      <RadioCircle off />
    </div>
  );
};
