import { Typography } from "antd";
import React from "react";
export const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ padding: 12 }}>
    <Typography.Title level={4} style={{ marginTop: 8 }}>{title}</Typography.Title>
    {children}
  </div>
);
