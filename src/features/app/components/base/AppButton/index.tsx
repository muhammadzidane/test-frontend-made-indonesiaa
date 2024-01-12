// React
import React, { useCallback } from "react";

// React Router DOM
import { useNavigate } from "react-router-dom";

// Ant
import { Button } from "antd";

// CVA
import { button, type IAppButtonProps } from "./cva";

const AppButton: React.FC<IAppButtonProps> = ({
  children,
  navigate,
  className,
  rounded,
  ...props
}) => {
  const navigateRoute = useNavigate();

  const buttonClassName = button({
    className,
    rounded,
  });

  /**
   * @description Handle navigate route
   *
   * @returns void
   */
  const onClickButton = useCallback((): void => {
    if (navigate != null) {
      navigateRoute(navigate);
    }
  }, [navigateRoute, navigate]);

  return (
    <Button
      onClick={onClickButton}
      className={buttonClassName}
      type="default"
      {...props}
    >
      {children}
    </Button>
  );
};

export default AppButton;
