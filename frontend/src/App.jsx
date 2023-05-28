import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages with lazy loading
import Home from "./pages/Home";
const Offers = lazy(() => import("./pages/Offers"));
const Information = lazy(() => import("./pages/Information"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
