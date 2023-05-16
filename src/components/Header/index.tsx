import React, { useState, useEffect, FormEvent } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { ContentWrapper } from "../ContentWrapper";
import logo from "../../assets/images/FilmHublogo.svg";

import * as C from "./styles";

export const Header: React.FC = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState<string | boolean>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type: string) => {
    type === "movie" ? navigate("/explore/movie") : navigate("/explore/tv");
    setMobileMenu(false);
  };

  return (
    <C.Header className={`${mobileMenu && "mobileView"} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="FilmHub" />
        </div>

        <C.MenuItems className={`${mobileMenu && "mobileView"}`}>
          <li onClick={() => navigationHandler("movie")}>Movies</li>
          <li onClick={() => navigationHandler("tv")}>TV Shows</li>
          <li>
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </C.MenuItems>

        <C.MobileMenuItems>
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </C.MobileMenuItems>
      </ContentWrapper>

      {showSearch && (
        <C.SearchBar>
          <ContentWrapper>
            <C.Form onSubmit={searchQueryHandler}>
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </C.Form>
          </ContentWrapper>
        </C.SearchBar>
      )}
    </C.Header>
  );
};
