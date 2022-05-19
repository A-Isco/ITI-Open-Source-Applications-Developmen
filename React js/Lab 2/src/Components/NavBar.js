import { NavLink } from "react-router-dom";

let NavBAr = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to={"/about"}
                  className="nav-link active"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  to={"/error"}
                  className="nav-link active"
                  aria-current="page"
                >
                  Error
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBAr;
