import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LecturerDashboard from "./pages/LecturerDashboard";
import RegistrarDashboard from "./pages/RegistrarDashboard";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="/lecturer" element={<LecturerDashboard />} />
                <Route path="/registrar" element={<RegistrarDashboard />} />
            </Routes>
        </Router>
    );
};
export default App;