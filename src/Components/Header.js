import { logo_url } from "../utils/constants";
import Navbar from "./Navbar";

const Header=()=>{
    return (
        <div className ="header">
            <img className="logo" src={logo_url} />
            <Navbar />
        </div>
    )
}

export default Header;