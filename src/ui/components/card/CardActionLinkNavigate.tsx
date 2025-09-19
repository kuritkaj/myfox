
import { EnvironmentOutlined } from "@ant-design/icons";
import { CardActionLink } from "./CardActionLink";

interface CardActionLinkNavigateProps {
  address?: string;
  text?: string;
}

function mapsUrl(address?: string) {
  return address ? `https://maps.google.com/?q=${encodeURIComponent(address)}` : undefined;
}

export function CardActionLinkNavigate({ address, text = "Trasa" }: CardActionLinkNavigateProps) {
  return (
    <CardActionLink
      href={mapsUrl(address)}
      icon={<EnvironmentOutlined />}
      text={text}
    />
  );
}
