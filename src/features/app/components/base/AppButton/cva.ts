import { type ButtonProps } from "antd";

import { cva, type VariantProps } from "class-variance-authority";

export const button = cva("", {
  variants: {
    rounded: {
      small: ["!rounded-[12px]"],
      large: ["!rounded-[25px]"],
    },
  },
});

export interface IAppButtonProps
  extends ButtonProps,
    VariantProps<typeof button> {
  navigate?: string;
  rounded?: "small" | "large";
}
