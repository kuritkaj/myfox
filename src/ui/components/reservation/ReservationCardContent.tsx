import { CalendarOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import dayjs from "dayjs";
import { Reservation } from "../../../domain/models";

interface ReservationCardContentProps {
  reservation: Reservation;
}

export const ReservationCardContent = ({ reservation: r }: ReservationCardContentProps) => {
  const date = r.from ? dayjs(r.from) : null;

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Typography.Text type="secondary">
        <CalendarOutlined /> {date ? date.format("D.M.YYYY HH:mm") : "—"}
      </Typography.Text>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {r.title}
      </Typography.Title>
      {r.addressText && <Typography.Text>{r.addressText}</Typography.Text>}
      <Space wrap style={{ opacity: .8 }}>
        {r.durationMin ? <Typography.Text>{r.durationMin} min</Typography.Text> : null}
        {r.priceVat ? <Typography.Text>{Math.round(r.priceVat)} Kč</Typography.Text> : null}
        <Typography.Text type="secondary">Stav: {r.state}</Typography.Text>
      </Space>
    </Space>
  );
};
