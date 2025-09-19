
import { Skeleton } from 'antd';
import { Reservation } from '../../../domain/models';
import { Section } from '../Section';
import { ReservationList } from './ReservationList';

interface ReservationSectionProps {
  title: string;
  reservations: Reservation[];
  loading?: boolean;
}

export const ReservationSection = ({ title, reservations, loading = false }: ReservationSectionProps) => (
  <Section title={title}>
    {loading ? (
      <Skeleton active />
    ) : (
      <ReservationList reservations={reservations} />
    )}
  </Section>
);
