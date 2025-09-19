/* =========================
   Scalar aliases
========================= */
export type ID = string;
export type AWSDateTime = string;
export type Locale = string;
export type Currency = string;

/* =========================
   Enums
========================= */
export enum CalendarState {
  Open = "Open",
  Paid = "Paid",
  Canceled = "Canceled",
  Storno = "Storno",
  Test = "Test",
}

export enum EventType {
  Individual = "Individual",
  Group = "Group",
  Unavailability = "Unavailability",
}

export enum OrderByArg {
  ASC = "ASC",
  DESC = "DESC",
}

/* =========================
   Core object types
========================= */

export interface File {
  id: ID;                 // !
  secret: string;         // !
}

export interface Address {
  // ve schématu není rozpad, používá se jen "Address"
  // v dotazech se objevují street/city/zip → ponechávám volitelné
  street?: string | null;
  city?: string | null;
  zip?: string | null;
}

export interface UserMyFox {
  id: ID;                 // !
  address?: string | null;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  surname?: string | null;
  locale?: Locale | null;
  userPicture?: File | null;
}

export interface Employee {
  id: ID;                 // !
  color?: string | null;
  showCstContact: boolean; // !
  notifyPhone?: string | null;
  receiptName?: string | null;
  userMyFox?: UserMyFox | null;
}

export interface Item {
  id: ID;                 // !
  color: string;          // !
  code?: string | null;
  stockEnabled?: boolean | null;
  warranty?: string | null;
  manufacturer?: string | null;
  duration?: number | null;
  pauseAfter?: number | null;
  pauseBefore?: number | null;
  name: string;           // !
  note?: string | null;
  ord?: number | null;
  price?: number | null;
  priceVat?: number | null;
  picture?: File | null;
}

export interface Cart {
  id: ID;                 // !
  count?: number | null;
  item?: Item | null;
  name: string;           // !
  price?: number | null;
  priceVat: number;       // !
  vat: number;            // !
}

export interface Shop {
  id: ID;                 // !
  name: string;           // !
  address?: Address | null;
  email?: string | null;
  phone?: string | null;
}

export interface Microsite {
  // implicitní obal pro logo (není výslovně v sekci, ale je v Subject)
  logo?: File | null;
}

export interface Subject {
  id: ID;                 // !
  name?: string | null;
  marketingName?: string | null;
  alias: string;          // !
  address?: Address | null;
  microsite?: Microsite | null;
  customersLastChange?: AWSDateTime | null;
  locale?: Locale | null;
  currency?: Currency | null;
  dic?: string | null;
  ico?: string | null;
  vatPayer?: boolean | null;
}

export interface Customer {
  id: ID;                 // !
  createdAt: AWSDateTime; // !
  name?: string | null;
  surname?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  locale?: Locale | null;
  picture?: File | null;
}

export interface Calendar {
  id: ID;                 // !
  capacity?: number | null;
  eventType: EventType;   // !
  carts?: Cart[] | null;  // [Cart!] — pole může být null, položky ne
  createdAt: AWSDateTime; // !
  employees?: Employee[] | null;
  from?: AWSDateTime | null;
  note?: string | null;
  shop?: Shop | null;
  subject?: Subject | null;
  state: CalendarState;   // !
  to?: AWSDateTime | null;
  updatedAt: AWSDateTime; // !
  isOnlineReservation?: boolean | null;
  canBeCancelUntil?: AWSDateTime | null;
}

/* =========================
   Inputs (mutations)
========================= */

export interface CustomerUpdateInput {
  name?: string | null;
  surname?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  locale?: Locale | null;
}

export interface CustomerWhereUniqueInput {
  id?: string | null;
}

/* =========================
   Filters (queries)
========================= */

export interface StringFilter {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  in?: string[] | null;
  not?: StringFilter | null;
  notIn?: string[] | null;
  startsWith?: string | null;
  mode?: string | null;
}

export interface AWSDateTimeFilter {
  equals?: AWSDateTime | null;
  gt?: AWSDateTime | null;
  gte?: AWSDateTime | null;
  in?: AWSDateTime[] | null;
  lt?: AWSDateTime | null;
  lte?: AWSDateTime | null;
  not?: AWSDateTimeFilter | null;
  notIn?: AWSDateTime[] | null;
}

export interface BooleanFilter {
  equals?: boolean | null;
  not?: BooleanFilter | null;
}

export interface IntFilter {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  not?: IntFilter | null;
  notIn?: number[] | null;
}

export interface IntNullableFilter extends IntFilter {
  isNull?: boolean | null;
}

export interface FloatFilter {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  not?: FloatFilter | null;
  notIn?: number[] | null;
  isNull?: boolean | null;
}

export interface CalendarStateEnumFilter {
  equals?: CalendarState | null;
  in?: CalendarState[] | null;
  not?: CalendarStateEnumFilter | null;
  notIn?: CalendarState[] | null;
}

export interface EventTypeEnumFilter {
  equals?: EventType | null;
  in?: EventType[] | null;
  not?: EventTypeEnumFilter | null;
  notIn?: EventType[] | null;
}

/* ---- nested where inputs (without nullables) ---- */
export interface CustomerWhereInputWithoutNullables {
  id?: StringFilter | null;
  createdAt?: AWSDateTimeFilter | null;
  star?: BooleanFilter | null;
  updatedAt?: AWSDateTimeFilter | null;
  warning?: BooleanFilter | null;
  name?: StringFilter | null;
  surname?: StringFilter | null;
  phone?: StringFilter | null;
  email?: StringFilter | null;
}

export interface CustomerFilter {
  some?: CustomerWhereInputWithoutNullables | null;
  every?: CustomerWhereInputWithoutNullables | null;
  none?: CustomerWhereInputWithoutNullables | null;
}

export interface EmployeeWhereInputWithoutNullables {
  id?: StringFilter | null;
  color?: StringFilter | null;
  createdAt?: AWSDateTimeFilter | null;
  bookEnabled?: BooleanFilter | null;
  showCstContact?: BooleanFilter | null;
  notifyPhone?: StringFilter | null;
  ord?: IntNullableFilter | null;
  receiptName?: StringFilter | null;
}

export interface EmployeeFilter {
  some?: EmployeeWhereInputWithoutNullables | null;
  every?: EmployeeWhereInputWithoutNullables | null;
  none?: EmployeeWhereInputWithoutNullables | null;
}

export interface CartWhereInputWithoutNullables {
  id?: StringFilter | null;
  count?: IntNullableFilter | null;
  createdAt?: AWSDateTimeFilter | null;
  name?: StringFilter | null;
  priceVat?: FloatFilter | null;
  updatedAt?: AWSDateTimeFilter | null;
  vat?: FloatFilter | null;
  price?: FloatFilter | null;
}

export interface CartFilter {
  some?: CartWhereInputWithoutNullables | null;
  every?: CartWhereInputWithoutNullables | null;
  none?: CartWhereInputWithoutNullables | null;
}

export interface CalendarWhereInput {
  id?: StringFilter | null;
  capacity?: IntNullableFilter | null;
  customers?: CustomerFilter | null;
  employees?: EmployeeFilter | null;
  state?: CalendarStateEnumFilter | null;
  carts?: CartFilter | null;
  from?: AWSDateTimeFilter | null;         // AWSDateTimeNullableFilter → sjednoceno
  to?: AWSDateTimeFilter | null;
  eventType?: EventTypeEnumFilter | null;
}

export interface CalendarOrderByInput {
  id?: OrderByArg | null;
  billNumber?: OrderByArg | null;
  capacity?: OrderByArg | null;
  createdAt?: OrderByArg | null;
  from?: OrderByArg | null;
  note?: OrderByArg | null;
  paidAt?: OrderByArg | null;
  payType?: OrderByArg | null;
  eventType?: OrderByArg | null;
  state?: OrderByArg | null;
  to?: OrderByArg | null;
  updatedAt?: OrderByArg | null;
}

/* =========================
   Operation payloads
========================= */

// Query: getCustomer
export interface GetCustomerVariables {
  id?: string | null;
}
export interface GetCustomerResult {
  getCustomer?: Customer | null;
}

// Query: listCalendars
export interface ListCalendarsVariables {
  where?: CalendarWhereInput | null;
  orderBy?: CalendarOrderByInput | null;
  customerId?: string | null; // užitečné, pokud skládáš where { customers: { some: { id: { equals: $customerId }}}}
}
export interface ListCalendarsResult {
  listCalendars: Calendar[]; // ! na poli
}

// Mutation: updateCustomer
export interface UpdateCustomerVariables {
  id?: string | null;
  data: CustomerUpdateInput;
}
export interface UpdateCustomerResult {
  updateCustomer?: Customer | null;
}
