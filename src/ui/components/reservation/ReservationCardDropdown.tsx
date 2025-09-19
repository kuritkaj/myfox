
import { MenuProps } from "antd";
import { Reservation } from "../../../domain/models";
import { CardActionDropdown } from "../card/CardActionDropdown";

function createReservationUrl(alias?: string) {
  return alias ? `https://${alias}.snippet-test.myfox.cz/form/show` : undefined;
}

interface ReservationCardDropdownProps {
  reservation: Reservation;
}

export const ReservationCardDropdown = ({ reservation }: ReservationCardDropdownProps) => {
  const menuItems: MenuProps['items'] = [
    {
      key: "new",
      label: <a href={createReservationUrl(reservation.subjectAlias)} target="_blank">Vytvořit další rezervaci</a>,
      disabled: !reservation.subjectAlias
    },
    {
      key: "ical",
      label: <span style={{ opacity: .5 }}>Přidat do kalendáře</span>,
      disabled: true
    },
    {
      key: "contact",
      label: <span style={{ opacity: .5 }}>Přidat do kontaktů</span>,
      disabled: true
    },
  ];

  return <CardActionDropdown items={menuItems} />;
};
