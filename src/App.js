import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Models from "./Components/Models";
import Upload from "./Components/Upload";
import View from "./Components/View";
import Navbar from "./Components/Navbar";
import First from "./Components/First";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<First />} />
        <Route exact path="/models" element={<Models />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
