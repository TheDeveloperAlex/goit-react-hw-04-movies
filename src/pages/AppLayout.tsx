import { FC } from "react";
import { Outlet } from "react-router";
import { AppHeader } from "../components/appHeader";
import { AppFooter } from "../components/footer";
import { Layout } from "antd";

const { Content } = Layout;

export const AppLayout: FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppHeader />
      <Content style={{ flex: "1" }}>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  );
};
