import { FC } from "react";
import { Outlet } from "react-router";
import { AppHeader } from "../components/appHeader";
import { AppFooter } from "../components/footer";
import { Layout } from "antd";
import "./AppLayout.less";

const { Content } = Layout;

export const AppLayout: FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Content className="content-container" style={{ flex: "1" }}>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  );
};
