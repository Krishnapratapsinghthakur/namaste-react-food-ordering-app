import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Navbar;