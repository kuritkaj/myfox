import { useMemo } from 'react';
import {
  mapCalendarToReservation,
  partitionReservations,
} from '../../infrastructure/mappers/calendarMapper';
import { useCalendars } from './useCalendars';

export function useReservations() {
  const { calendars, loading, error, refetch } = useCalendars();

  const reservations = useMemo(() => {
    return calendars.map(mapCalendarToReservation);
  }, [calendars]);

  return { loading, error, refetch, reservations };
}

export function usePartitionedReservations() {
  const {loading, error, refetch, reservations } = useReservations()

  const {current, revisit } = useMemo(() => partitionReservations(reservations), [reservations]);
  return { loading, error, refetch, current, revisit };
}
