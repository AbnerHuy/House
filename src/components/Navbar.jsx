import { useNavigate, useLocation, Route } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcons } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcons } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem">
            <ExploreIcons
              fill={pathMathRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
              onClick={() => navigate("/")}
            />
            <p
              className={
                pathMathRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarlistItemName"
              }
            >
              Explore
            </p>
          </li>

          <li className="navbarListItem">
            <OfferIcon
              fill={pathMathRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
              onClick={() => navigate("/offers")}
            />
            <p
              className={
                pathMathRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarlistItemName"
              }
            >
              Offers
            </p>
          </li>

          <li className="navbarListItem">
            <PersonOutlineIcons
              fill={pathMathRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
              onClick={() => navigate("/profile")}
            />
            <p
              className={
                pathMathRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarlistItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
