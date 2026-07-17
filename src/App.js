import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Dashboard from "./components/Dashboard";
import ScrollToTop from "./components/ScrollToTop";
import ServiceDetails from "./components/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/services/:slug"element={<ServiceDetails />} />
        </Route>

        <Route path="/v-admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;