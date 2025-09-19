import { gql } from "@apollo/client";

export const GET_CUSTOMER = gql`
  query GetCustomer($id: String) {
    getCustomer(where: { id: $id }) {
      id
      name
      surname
      phone
      email
      address
      locale
      picture { secret }
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer($id: String, $data: CustomerUpdateInput!) {
    updateCustomer(where: { id: $id }, data: $data) {
      id
      name
      surname
      phone
      email
      address
      locale
    }
  }
`;

export const LIST_CALENDARS = gql`
  query ListCalendars($customerId: String) {
    listCalendars(
      where: {
        customers: { some: { id: { equals: $customerId } } }
        eventType: { equals: Individual }
      }
      orderBy: { from: DESC }
    ) {
      id
      state
      from
      to
      note
      shop {
        name
        phone
        email
        address { street city zip }
      }
      subject {
        alias
        marketingName
        microsite { logo { secret } }
      }
      carts {
        id
        name
        priceVat
        item { duration name picture { secret } }
      }
      employees {
        id
        receiptName
        userMyFox { name surname userPicture { secret } }
      }
    }
  }
`;
