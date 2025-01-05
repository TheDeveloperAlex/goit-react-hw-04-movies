import { FC } from "react";
import { Outlet } from "react-router";

export const Account: FC = () => {
  return (
    <div>
      <h1>Account</h1>
      <Outlet />
    </div>
  );
};
