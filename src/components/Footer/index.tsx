import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import { ContentWrapper } from "../ContentWrapper";

import * as C from "./styles";

export const Footer: React.FC = () => {
  return (
    <C.Footer>
      <ContentWrapper>
        <C.MenuItems>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
          <li>About</li>
          <li>Blog</li>
          <li>FAQ</li>
        </C.MenuItems>
        <C.InfoText>
          Explore the fascinating world of cinema! Keep scrolling through our
          site to discover an immersion of exciting films, engaging stories and
          endearing characters. From intense dramas to action-packed adventures,
          we have a wide selection of movies for every taste. Be sure to explore
          the different categories and genres, delve into nostalgic classic
          works or catch up on the latest releases. Enjoy this cinematic journey
          and immerse yourself in the narratives that come to life on screen.
          Keep exploring as there are always more movies waiting to be
          discovered and enjoyed. Embark on this journey and enjoy the magic of
          cinema!
        </C.InfoText>
        <C.SocialIcons>
          <a
            href="https://www.facebook.com/vinicius.rubia.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/vinicius_rubia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@putcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-rubia-149ab0213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </C.SocialIcons>
      </ContentWrapper>
    </C.Footer>
  );
};
