import { useQuery, useMutation } from "@apollo/client/react";
import { GET_CUSTOMER, UPDATE_CUSTOMER } from "../../infrastructure/graphql/documents";
import { CUSTOMER_ID } from "../../infrastructure/utils/env";
import {
  CustomerUpdateInput,
  GetCustomerResult,
} from '../../infrastructure/graphql/types';
import { Customer } from '../../domain/models';
import { mapApiCustomerToCustomer } from '../../infrastructure/mappers/customerMapper';

export function useCustomer() {
  const {loading, error, data} = useQuery<GetCustomerResult>(GET_CUSTOMER, { variables: { id: CUSTOMER_ID } });

  return {
    loading,
    error,
    customer: mapApiCustomerToCustomer(data?.getCustomer)
  };
}

export function useUpdateCustomer(){
  const [mutate, mState] = useMutation(UPDATE_CUSTOMER, {
    refetchQueries: [{ query: GET_CUSTOMER, variables: { id: CUSTOMER_ID } }],
  });

  return {
    update: (data: CustomerUpdateInput) => mutate({ variables: { id: CUSTOMER_ID, data } }),
    updating: mState.loading,
  };
}
