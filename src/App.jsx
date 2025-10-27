import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Promotions from "./pages/Promotion";

// ...otras páginas

function App() {
  return (
    <Router>
      <Sidebar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          
          {/* ...otras rutas */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
