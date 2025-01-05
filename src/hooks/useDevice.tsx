import { Grid } from "antd";

const { useBreakpoint } = Grid;

export type BreakpointKeys = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
type DeviceParams =
  | "isMobile"
  | "isTablet"
  | "isDesktop"
  | "currentBreakpoint"
  | BreakpointKeys;

type DeviceReturnType = {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
  currentBreakpoint?: BreakpointKeys | null;
} & Record<BreakpointKeys, boolean | undefined>;

export const useDevice = <T extends DeviceParams[]>(
  paramsArr: T
): Pick<DeviceReturnType, T[number]> => {
  const screens = useBreakpoint();

  const paramCalculators: Record<DeviceParams, () => any> = {
    isMobile: () => screens.xs || screens.sm,
    isTablet: () => screens.md,
    isDesktop: () => screens.lg || screens.xl || screens.xxl,
    currentBreakpoint: () =>
      Object.entries(screens).find(([_, value]) => value)?.[0] || "unknown",
    xs: () => screens.xs,
    sm: () => screens.sm,
    md: () => screens.md,
    lg: () => screens.lg,
    xl: () => screens.xl,
    xxl: () => screens.xxl,
  };

  return paramsArr.reduce((result, param) => {
    if (paramCalculators[param]) {
      result[param] = paramCalculators[param]();
    }
    return result;
  }, {} as Record<DeviceParams, any>);
};
