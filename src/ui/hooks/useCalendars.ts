import { useQuery } from '@apollo/client/react';
import { LIST_CALENDARS } from '../../infrastructure/graphql/documents';
import { CUSTOMER_ID } from '../../infrastructure/utils/env';
import { ListCalendarsResult } from '../../infrastructure/graphql/types';

export function useCalendars() {
  const { data, loading, error, refetch } = useQuery<ListCalendarsResult>(
    LIST_CALENDARS,
    {
      variables: { customerId: CUSTOMER_ID },
    }
  );

  return { loading, error, refetch, calendars: data?.listCalendars ?? [] };
}
