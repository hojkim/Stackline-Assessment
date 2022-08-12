import "./navbar.css";
import logo from "../logo.svg";

const Navbar = () => {
   return (
      <div className="nav">
         <div className="nav-logo-container">
            <img src={logo} className="nav-logo" alt="logo" />
         </div>
      </div>
   );
};

export default Navbar;
