import { Card } from "antd";
import { Reservation } from "../../../domain/models";
import { ReservationCardContent } from './ReservationCardContent';
import { ReservationCardDropdown } from './ReservationCardDropdown';
import { CardActionLinkNavigate } from '../card/CardActionLinkNavigate';
import { CardActionLinkCall } from '../card/CardActionLinkCall';

export default function ReservationCard({ r }: { r: Reservation }) {
  return (
    <Card
      size="small"
      style={{ marginBottom: 12, borderRadius: 12 }}
      cover={r.imageUrl ? <img src={r.imageUrl} alt="" style={{ maxHeight: 120, objectFit: "cover" }} /> : undefined}
      actions={[
        <CardActionLinkNavigate key="route" address={r.addressText} />,
        <CardActionLinkCall key="call" phoneNumber={r.shopPhone || ""} />,
        <ReservationCardDropdown key="more" reservation={r} />,
      ]}
    >
      <ReservationCardContent reservation={r} />
    </Card>
  );
}
