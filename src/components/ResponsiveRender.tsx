import { FC, ReactNode } from "react";
import { BreakpointKeys, useDevice } from "../hooks/useDevice";
type ResponsiveRenderProps = {
  children: ReactNode;
  allowed: BreakpointKeys[];
};

export const ResponsiveRender: FC<ResponsiveRenderProps> = ({
  children,
  allowed,
}) => {
  const { currentBreakpoint } = useDevice(["currentBreakpoint"]);
  const isRender = allowed.includes(currentBreakpoint as BreakpointKeys);
  return isRender ? <>{children}</> : null;
};
