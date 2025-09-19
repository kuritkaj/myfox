import { MenuOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Layout, Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

export default function TopBar() {
  const loc = useLocation();
  const items = [
    { key: "res", label: <Link to="/">Moje rezervace</Link> },
    { key: "me",  label: <Link to="/me">Osobní údaje</Link> },
    { type: "divider" as const },
    { key: "logout", label: <span style={{opacity:.5}}>Odhlásit</span>, disabled: true },
  ];
  return (
    <Header style={{ background: "#fff", paddingInline: 12, position: "sticky", top: 0, zIndex: 10 }}>
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Space>
          <img src="/logo.svg" height={20} alt="MyFox" />
          <Typography.Text strong style={{ fontSize: 16 }}>REZERVAČNÍ SYSTÉM</Typography.Text>
        </Space>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Avatar icon={<MenuOutlined />} />
        </Dropdown>
      </Space>
    </Header>
  );
}
