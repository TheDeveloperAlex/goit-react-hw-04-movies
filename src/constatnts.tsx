import {
  FacebookOutlined,
  InstagramOutlined,
  MessageOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

export const SEARCH = "https://api.themoviedb.org/3";
export const API_KEY = `api_key=${process.env.REACT_APP_KEY}`;

/* <Space direction="vertical">
            <a href="/">Home</a>
            <a href="/movies">Movies</a>
            <a href="/trending">Trending</a>
          </Space> */

export const SOCIAL_LINKS = [
  {
    target: "_blank",
    to: "https://facebook.com",
    children: <FacebookOutlined />,
  },
  {
    target: "_blank",
    to: "https://twitter.com",
    children: <TwitterOutlined />,
  },
  {
    target: "_blank",
    to: "https://instagram.com",
    children: <InstagramOutlined />,
  },
  {
    target: "_blank",
    to: "https://youtube.com",
    children: <YoutubeOutlined />,
  },
  {
    target: "_blank",
    to: "https://telegram.com",
    children: <MessageOutlined />,
  },
];

export const HELP_LINKS = [
  {
    to: "/privacy",
    children: "Privacy Policy",
  },
  {
    to: "/terms",
    children: "Terms of Service",
  },
  {
    to: "/sitemap",
    children: "Sitemap",
  },
];
