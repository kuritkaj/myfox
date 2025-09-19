import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReservationsPage } from '../ui/pages/ReservationsPage';
import { PersonalDataPage } from '../ui/pages/PersonalDataPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ReservationsPage /> },
      { path: "me", element: <PersonalDataPage /> },
    ],
  },
]);

export default function RootRouter() {
  return <RouterProvider router={router} />;
}
