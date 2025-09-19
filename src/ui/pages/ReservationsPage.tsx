import { Alert } from 'antd';
import { ReservationSection } from '../components/reservation/ReservationSection';
import { usePartitionedReservations } from '../hooks/useReservations';

export const ReservationsPage = () => {
  const { loading, error, current, revisit } = usePartitionedReservations();

  if (error)
    return <Alert type="error" message="Nepodařilo se načíst rezervace." />;

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', paddingInline: 8 }}>
      <ReservationSection 
        title="Moje rezervace" 
        reservations={current} 
        loading={loading} 
      />
      <ReservationSection 
        title="Navštivte znovu" 
        reservations={revisit} 
        loading={loading} 
      />
    </div>
  );
};
