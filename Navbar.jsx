import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/student">Student Dashboard</Link></li>
                <li><Link to="/lecturer">Lecturer Dashboard</Link></li>
                <li><Link to="/registrar">Registrar Dashboard</Link></li>
            </ul>    

        </nav>
    );
}

export default Navbar;