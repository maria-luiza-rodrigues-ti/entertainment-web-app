import LogoTipo from "/assets/logo.svg";
import { AiFillAppstore } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa6";
import ImageAvatar from "/assets/image-avatar.png";

import { NavLink } from "react-router-dom";

import { AvatarContainer, HomeIcon, NavigationContainer } from "./styles";

export function Navigation() {
  return (
    <NavigationContainer>
      <HomeIcon src={LogoTipo} alt="" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" title="Home">
              <AiFillAppstore color="#5A698F" size={28} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" title="Movies">
              <MdLocalMovies color="#5A698F" size={28} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/tv-series" title="TV Series">
              <PiTelevisionBold color="#5A698F" size={25} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bookmarked" title="Bookmarked">
              <FaBookmark color="#5A698F" size={24} />
            </NavLink>
          </li>
        </ul>
      </nav>

      <AvatarContainer>
        <img src={ImageAvatar} alt="" />
      </AvatarContainer>
    </NavigationContainer>
  );
}
