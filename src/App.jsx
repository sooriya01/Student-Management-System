import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";

import Dashboard from "./Pages/Dashboard";
import Students from "./Pages/Students";
import Courses from "./Pages/Courses";
import Attendance from "./Pages/Attendance";
import Marks from "./Pages/Marks";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />

          <Route path="students" element={<Students />} />

          <Route path="courses" element={<Courses />} />

          <Route path="attendance" element={<Attendance />} />

          <Route path="marks" element={<Marks />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;