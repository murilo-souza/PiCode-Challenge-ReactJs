import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Books } from "../pages/Books";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Students } from "../pages/Students";

export function WebRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/students" element={<Students />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
