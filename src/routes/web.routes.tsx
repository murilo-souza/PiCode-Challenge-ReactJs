import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Books } from "../pages/Books";
import { Students } from "../pages/Students";

export function WebRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </>
  );
}
