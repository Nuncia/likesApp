import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{textAlign: 'center'}}>
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
