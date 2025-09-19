import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import TopBar from "../ui/components/TopBar";

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <TopBar />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
