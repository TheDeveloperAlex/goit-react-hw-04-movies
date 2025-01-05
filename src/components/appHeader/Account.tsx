import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { FC } from "react";
import { NavLink } from "react-router";
import { AuthButtons } from "./AuthButtons";
import { ResponsiveRender } from "../ResponsiveRender";

const userMenu = [
  {
    key: "/account/profile",
    label: <NavLink to="/account/profile">Profile</NavLink>,
  },
  {
    key: "/account/settings",
    label: <NavLink to="/account/settings">Settings</NavLink>,
  },
  {
    key: "Log Out",
    label: <Button onClick={() => console.log("Log Out")}>Log Out</Button>,
  },
];

export const Account: FC = () => {
  const isLogged = false;
  return isLogged ? (
    <Dropdown menu={{ items: userMenu }} trigger={["click"]}>
      <Button type="default" icon={<UserOutlined />} />
    </Dropdown>
  ) : (
    <ResponsiveRender allowed={["sm", "md", "lg", "xl", "xxl"]}>
      <AuthButtons />
    </ResponsiveRender>
  );
};
