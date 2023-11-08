import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App({ children }) {
  return (
    <>
      <Layout />

      <main>{children}</main>

      <Footer />  
    </>
  );
}

export default App;
