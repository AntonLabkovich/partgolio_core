import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import NotFound from "../pages/NotFound/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;