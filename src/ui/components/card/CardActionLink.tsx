
import { ReactNode } from "react";

interface CardActionLinkProps {
  href?: string;
  icon: ReactNode;
  text: string;
  disabled?: boolean;
}

export const CardActionLink = ({ href, icon, text, disabled = false }: CardActionLinkProps) => {
  if (!href || disabled) {
    return <span>{icon} {text}</span>;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {icon} {text}
    </a>
  );
};
