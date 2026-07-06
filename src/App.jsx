import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Story from "./pages/Story/Story";
import MainLayout from "./layout/MainLayout";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projet/:slug" element={<Story />} />
      </Route>
    </Routes>
  );
}

export default App;
