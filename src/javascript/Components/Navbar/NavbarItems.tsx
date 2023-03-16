import { HomeOutlined, IdcardOutlined, LaptopOutlined } from "@ant-design/icons";

export const navbarItems = [
  {
    to: "/",
    label: "Home",
    key: "home",
    icon: <HomeOutlined />
  },
  {
    to: "/account-info",
    label: "Account",
    key: "accountInfo",
    icon: <IdcardOutlined />
  },
  {
    to: "/page2",
    label: "Page 2",
    key: "sub-page2",
    icon: <LaptopOutlined />
  },
];
