
import { PhoneOutlined } from "@ant-design/icons";
import { CardActionLink } from "./CardActionLink";

interface CardActionLinkCallProps {
  phoneNumber?: string;
  text?: string;
}

export function CardActionLinkCall({ phoneNumber, text = "Zavolat" }: CardActionLinkCallProps) {
  return (
    <CardActionLink
      href={phoneNumber ? `tel:${phoneNumber}` : undefined}
      icon={<PhoneOutlined />}
      text={text}
    />
  );
}
