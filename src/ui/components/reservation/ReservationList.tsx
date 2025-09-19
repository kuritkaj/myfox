import { Reservation } from '../../../domain/models';
import React, { useMemo } from 'react';
import { Empty } from 'antd';
import ReservationCard from './ReservationCard';

interface ReservationListProps {
  reservations: Reservation[],
}
export const ReservationList = React.memo(({ reservations }: ReservationListProps) => {
  if (!reservations.length) {
    return <Empty description="Zatím nic k zobrazení" />
  }

  return reservations.map(r => <ReservationCard key={r.id} r={r} />);
})
