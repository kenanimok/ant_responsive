import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import AppHeader from "./components/common/header";
import AppHome from "./components/view/home";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
