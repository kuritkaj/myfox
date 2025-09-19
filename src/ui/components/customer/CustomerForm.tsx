
import { useEffect } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { CustomerUpdateInput } from '../../../infrastructure/graphql/types';
import { Customer } from '../../../domain/models';

interface CustomerFormProps {
  customer?: Customer;
  onSubmit: (values: CustomerUpdateInput) => Promise<void>;
  loading?: boolean;
}

export const CustomerForm = ({ customer, onSubmit, loading = false }: CustomerFormProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (customer) {
      form.setFieldsValue(customer);
    }
  }, [customer, form]);

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      {customer?.imageUrl && (
        <img
          src={customer.imageUrl}
          alt="profil"
          style={{ width: 64, height: 64, borderRadius: '50%' }}
        />
      )}

      <Form layout="vertical" form={form} onFinish={onSubmit}>
        <Form.Item name="name" label="Jméno">
          <Input placeholder="Jméno" />
        </Form.Item>
        <Form.Item name="surname" label="Příjmení">
          <Input placeholder="Příjmení" />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[{ type: 'email', message: 'Neplatný e-mail' }]}
        >
          <Input inputMode="email" placeholder="např. petr@gmail.com" />
        </Form.Item>
        <Form.Item name="phone" label="Telefon">
          <Input inputMode="tel" placeholder="+420 123 456 789" />
        </Form.Item>
        <Form.Item name="address" label="Adresa">
          <Input.TextArea autoSize placeholder="Ulice, město" />
        </Form.Item>

        <Button block type="primary" htmlType="submit" loading={loading}>
          ULOŽIT
        </Button>
      </Form>
    </Space>
  );
};
