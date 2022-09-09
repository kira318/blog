import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
                <nav>
                    <Link to="/" className="brand">Home</Link>
                    <SearchBar/>
                    <Link to="/create">Write</Link> 
                </nav>
        </div>
    )
}