import { Menu, MenuProps } from "antd";
import { FC } from "react";
import { NavLink, useLocation, useParams } from "react-router";
type NavBarProps = Pick<MenuProps, "theme" | "mode" | "className">;

const navData: Array<{ children: string; to: string }> = [
  { children: "Home", to: "/" },
  { children: "Search", to: "/search" },
  { children: "Top movies", to: "/top-movies" },
];

const navMenuItems = navData.map((navItem) => ({
  key: navItem.to,
  label: <NavLink {...navItem} />,
}));

export const NavBar: FC<NavBarProps> = (props) => {
  let { pathname } = useLocation();
  const currentPage = pathname.match(/^\/([^/]+)/)?.[0] || "/";

  return (
    <Menu
      {...props}
      defaultOpenKeys={["/"]}
      selectedKeys={[currentPage]}
      items={navMenuItems}
    />
  );
};
