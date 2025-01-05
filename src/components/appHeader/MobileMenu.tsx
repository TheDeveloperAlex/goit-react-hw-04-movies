import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer, Space } from "antd";
import { FC, ReactNode, useState } from "react";
import { NavBar } from "./NavBar";
import { useNavigate } from "react-router";
import { ResponsiveRender } from "../ResponsiveRender";
import { AuthButtons } from "./AuthButtons";

type Props = {
  children: ReactNode;
  isMobile: boolean;
};

export const MobileMenu: FC<Props> = ({ children, isMobile }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const toggleDrawer = () => setIsDrawerVisible(!isDrawerVisible);
  let navigate = useNavigate();
  const redirectToSearch = () => {
    navigate("search");
  };
  return isMobile ? (
    <Space>
      <Button
        icon={<SearchOutlined />}
        className={"mobileButton"}
        onClick={redirectToSearch}
      />
      {children}
      <Button
        icon={<MenuOutlined />}
        className={"mobileButton"}
        onClick={toggleDrawer}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={isDrawerVisible}
      >
        <NavBar mode="vertical" />
        <Divider />
        <ResponsiveRender allowed={["xs"]}>
          <AuthButtons />
        </ResponsiveRender>
      </Drawer>
    </Space>
  ) : (
    <>{children}</>
  );
};
