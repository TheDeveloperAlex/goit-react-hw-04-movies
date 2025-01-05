import { FC } from "react";
import { NavLink, useNavigate } from "react-router";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Layout } from "antd";
import { useDevice } from "../../hooks/useDevice";
import { MobileMenu } from "./MobileMenu";
import { NavBar } from "./NavBar";
import { Account } from "./Account";
import "./AppHeader.less";

const { Header } = Layout;
const { Search } = Input;

export const AppHeader: FC = () => {
  const { isMobile, isDesktop } = useDevice(["isMobile", "isDesktop"]);
  let navigate = useNavigate();

  const onSearch = (query: string) => {
    if (query === "") return;
    navigate(`/search?query=${query}`);
  };

  return (
    <Header className="header">
      <NavLink to="/" end className="logo">
        🎬 MovieScope
      </NavLink>
      {isDesktop && (
        <>
          <NavBar theme="dark" mode="horizontal" className={"menu"} />
          <Search
            placeholder="Search movies"
            className={"search"}
            enterButton={<SearchOutlined />}
            onSearch={onSearch}
          />
        </>
      )}

      <MobileMenu isMobile={!!isMobile && !isDesktop}>
        <Account />
      </MobileMenu>
    </Header>
  );
};
