// Ant
import { Input } from "antd";

import { AppText } from "@/features/app/components/base";

// CVA
import { type IAppInputProps } from "./cva";

const AppInput: React.FC<IAppInputProps> = ({ label, ...props }) => (
  <div>
    {label != null && (
      <AppText className="mb-2" size="sm" weight="bold">
        {label}
      </AppText>
    )}
    <Input {...props} />
  </div>
);

export default AppInput;
