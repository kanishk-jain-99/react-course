import { Link } from "react-router-dom/cjs/react-router-dom.min";

import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favouritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites</Link>
            <span className={classes.badge}>
              {favouritesCtx.totalFavorites}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
