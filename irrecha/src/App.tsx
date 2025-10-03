import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import History from "./pages/History";
import Updates from "./pages/Updates";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
