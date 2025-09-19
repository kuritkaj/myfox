import { PHOTO_BASE } from './env';

export const getImageUrlFromSecret = (secret?: string | null) =>
  secret ? `${PHOTO_BASE}${secret}` : undefined;
