import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import About from "./pages/About/About.mdx";
import Contact from "./pages/Contact/Contact";
import Story from "./pages/Story/Story";
import MainLayout from "./layout/MainLayout";
import "./App.css";
import Mentions from "./pages/Mentions légales/Mentions.mdx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projet/:slug" element={<Story />} />
        <Route path="/mentions-legales" element={<Mentions />} />
      </Route>
    </Routes>
  );
}

export default App;
