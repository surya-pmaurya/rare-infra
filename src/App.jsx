import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Gallery from "./pages/Gallery";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <main className="container-site min-h-[70vh] py-40">
      <div className="eyebrow">404</div>
      <h1 className="mt-3 font-display text-6xl font-extrabold">
        Page not found.
      </h1>
      <a
        href="/"
        className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-bold text-white"
      >
        Back home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
