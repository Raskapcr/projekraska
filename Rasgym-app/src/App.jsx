import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard"; 
import Trainers from "./pages/Trainers";
import Exercise from "./pages/Exercise";
import Class from "./pages/Class";
import { Routes, Route } from "react-router-dom"; 
import NotFound400 from "./error/NotFound400";
import NotFound401 from "./error/NotFound401";
import NotFound403 from "./error/NotFound403";


function App() {
  return (
    <div id="app-container" className="bg-white-100 min-h-screen flex w-full overflow-hidden">
      <Sidebar />
      <div id="main-content" className="flex-1 flex flex-col w-full">
        <Header />
        
        <Routes> {/* <-- ✅ Bungkus semua <Route> dengan ini */}
        <Route path="/NotFound400" element={<NotFound400 />} />
        <Route path="/NotFound401" element={<NotFound401 />} />
        <Route path="/NotFound403" element={<NotFound403 />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Exercise" element={<Exercise />} />
          <Route path="/Class" element={<Class />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
