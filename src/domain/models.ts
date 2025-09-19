export type ID = string;
export type AWSDateTime = string;
export type Locale = string;
export type Currency = string;

export interface FileWithSecret {
  id: ID;
  secret: string;
}

export type CalendarState = "Open" | "Paid" | "Canceled" | "Storno" | "Test";

export interface Reservation {
  id: string;
  state: CalendarState;
  from?: string | null;
  to?: string | null;
  title: string;
  subjectAlias?: string | null;
  shopName?: string;
  shopPhone?: string | null;
  addressText?: string;
  durationMin?: number;
  priceVat?: number;
  imageUrl?: string;
}

export interface Customer {
  id: ID;
  name?: string | null;
  surname?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  imageUrl?: string;
}

