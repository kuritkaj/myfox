import { Reservation } from '../../domain/models';
import { Calendar } from '../graphql/types';
import { getImageUrlFromSecret } from '../utils/photo';

export function mapCalendarToReservation(c: Calendar): Reservation {
  const firstCart = c?.carts?.[0];
  const itemPictureSecret = firstCart?.item?.picture?.secret;
  const logoSecret = c?.subject?.microsite?.logo?.secret;

  const address = c?.shop?.address;
  const addressText = [address?.street, address?.city, address?.zip]
    .filter(Boolean)
    .join(', ');

  return {
    id: c.id,
    state: c.state,
    from: c.from,
    to: c.to,
    title:
      firstCart?.item?.name || firstCart?.name || c?.shop?.name || 'Rezervace',
    subjectAlias: c?.subject?.alias,
    shopName: c?.shop?.name,
    shopPhone: c?.shop?.phone,
    addressText,
    durationMin: firstCart?.item?.duration ?? undefined,
    priceVat: firstCart?.priceVat ?? undefined,
    imageUrl:
      getImageUrlFromSecret(itemPictureSecret) ??
      getImageUrlFromSecret(logoSecret),
  };
}

export function partitionReservations(items: Reservation[]) {
  const current = items.filter((r) => r.state === "Open");
  const revisit = items.filter((r) => r.state !== "Open" && r.state !== "Canceled");
  return { current, revisit };
}
