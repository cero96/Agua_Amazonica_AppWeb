// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Promotions from "./pages/Promocion/Promotion";
import ProductPage from "./pages/Producto/ProductsPage";
import CompanyPresentation from "./pages/CompanyPresentation/CompanyPresentation";
import ContactPage from "./pages/Contact/ContactPage";


import "./assets/styles/global.css"; // Asegúrate de tener estilos globales base

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: "flex", minHeight: "100vh" }}>
        {/* Sidebar fijo */}
        <Sidebar />

        {/* Contenido principal */}
        <main
          className="main-content"
          style={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/company" element={<CompanyPresentation />} />
            <Route path="/contacts" element={<ContactPage />} />
       
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
