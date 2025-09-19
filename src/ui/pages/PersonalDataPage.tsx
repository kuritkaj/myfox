import { Card, message } from 'antd';
import { useCustomer, useUpdateCustomer } from '../hooks/useCustomer';
import { CustomerUpdateInput } from '../../infrastructure/graphql/types';
import { CustomerForm } from '../components/customer/CustomerForm';

export const PersonalDataPage = () => {
  const { customer, loading } = useCustomer();
  const { updating, update } = useUpdateCustomer();

  const handleSubmit = async (values: CustomerUpdateInput) => {
    try {
      await update(values);
      message.success('Osobní údaje byly uloženy.');
    } catch {
      message.error('Uložení se nezdařilo.');
    }
  };

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: 12 }}>
      <Card title="Osobní údaje" loading={loading} style={{ borderRadius: 12 }}>
        <CustomerForm 
          customer={customer} 
          onSubmit={handleSubmit} 
          loading={updating} 
        />
      </Card>
    </div>
  );
};
