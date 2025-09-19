import { EllipsisOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { ReactNode } from "react";

interface CardActionDropdownProps {
  items: MenuProps['items'];
  icon?: ReactNode;
  text?: string;
  trigger?: ("click" | "hover" | "contextMenu")[];
}

export const CardActionDropdown = ({
  items,
  icon = <EllipsisOutlined />,
  text = "Více",
  trigger = ["click"]
}: CardActionDropdownProps) => (
  <Dropdown menu={{ items }} trigger={trigger}>
    <a>
      {icon} {text}
    </a>
  </Dropdown>
);
