import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home.jsx";
import GiftList from "./components/GiftList.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentes" element={<GiftList />} />
      </Routes>
    </>
  );
}

export default App;
