import { Space } from "antd";
import { FC, ReactNode } from "react";
import { Link, NavLink } from "react-router";

type FooterLinkType = {
  to: string;
  title?: string;
  target?: string;
  children?: ReactNode | string;
};

type FooterLinkListProps = {
  links: FooterLinkType[];
  isNavLinks?: boolean;
  className?: string;
};

export const FooterLinkList: FC<FooterLinkListProps> = ({
  links,
  isNavLinks,
  className,
}) => {
  return (
    <ul className={className ? `links-list ${className}` : "links-list"}>
      {links.map((link) => {
        return isNavLinks ? (
          <NavLink {...link} />
        ) : (
          <Link rel="noopener noreferrer" {...link} />
        );
      })}
    </ul>
  );
};
