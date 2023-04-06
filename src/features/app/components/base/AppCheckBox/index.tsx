// React
import React from "react";

// Ant
import { Checkbox } from "antd";

// Interfaces
import { type IAppCheckBoxProps } from "./interfaces";

const AppCheckBox: React.FC<IAppCheckBoxProps> = ({ children, ...props }) => (
  <Checkbox {...props}>{children}</Checkbox>
);

export default AppCheckBox;
