import React from "react";
import { Divider, Layout, Space, Typography } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import "./Footer.less";
import { FooterLinkList } from "./FooterLinkList";
import { HELP_LINKS, SOCIAL_LINKS } from "../../constatnts";

const { Footer } = Layout;
const { Text, Title } = Typography;

export const AppFooter: React.FC = () => {
  return (
    <Footer className="footer">
      <div className="footer-top-part">
        <div>
          <Title level={4} className="logo">
            🎬 MovieScope
          </Title>
          <Text>Your favorite movie discovery platform.</Text>
        </div>
        <div>
          <Space direction="vertical">
            <Text>
              <MailOutlined /> support@moviescope.com
            </Text>
            <Text>
              <PhoneOutlined /> +1 (234) 567-8901
            </Text>
          </Space>
        </div>
        <div>
          <Title level={5}>Follow Us</Title>
          <FooterLinkList links={SOCIAL_LINKS} className="links-list-socials" />
        </div>
      </div>
      <Divider className="divider" />
      <div className="footer-bottom-part">
        <FooterLinkList
          links={HELP_LINKS}
          isNavLinks
          className="links-list-help"
        />
        <div>
          <Text>© 2024 MovieScope. All rights reserved.</Text>
        </div>
      </div>
    </Footer>
  );
};
