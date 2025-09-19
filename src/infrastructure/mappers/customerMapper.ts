import { GetCustomerResult } from '../graphql/types';
import { Customer } from '../../domain/models';
import { getImageUrlFromSecret } from '../utils/photo';

export const mapApiCustomerToCustomer = (
  apiCustomer: GetCustomerResult['getCustomer']
): Customer => {
  return {
    id: apiCustomer?.id || '',
    email: apiCustomer?.email,
    name: apiCustomer?.name,
    surname: apiCustomer?.surname,
    address: apiCustomer?.address,
    phone: apiCustomer?.phone,
    imageUrl: getImageUrlFromSecret(apiCustomer?.picture?.secret),
  };
};
