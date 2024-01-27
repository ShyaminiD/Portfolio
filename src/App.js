import "./App.css";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";

const { Header, Footer, Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
 
  color: "black",
  backgroundColor: "#0ad69f",
};
const menuItems = ["About", "Work", "Skills"];
function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["0"]}
              style={{
                flex: 1,
                minWidth: 0,
              }}
            >
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  {" "}
                  <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Header>
          <Content style={contentStyle}>
            <Routes>
            <Route path="/" element={<About/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/work" element={<Work/>} />
              <Route path="/skills" element={<Skills/>} />
            </Routes>
          </Content>
          <Footer></Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
