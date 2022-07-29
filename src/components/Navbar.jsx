import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/" className="navbar-brand">
          <BiCameraMovie />
          Movie App
        </Link>
      </h2>

      <form>
        <input type="text" placeholder="Buscar Filme" />
        <button type="submit">
          Buscar
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
