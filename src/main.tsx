import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client/react";
import { apollo } from "./infrastructure/graphql/client";
import RootRouter from "./application/Router";
import "antd/dist/reset.css";
import "dayjs/locale/cs";
import dayjs from 'dayjs';
dayjs.locale("cs");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apollo}>
      <RootRouter />
    </ApolloProvider>
  </React.StrictMode>
);
