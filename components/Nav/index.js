import React from "react";
import styled, { css } from "styled-components";

import { Button, Container, HorizontalSocialLinks } from "components";

const links = {
  home: "/",
  about: "/about",
  // blog: "/blog",
  contact: "/contact"
};

const Overlay = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 10;
  overflow: hidden;
  pointer-events: none;
  height: 100%;

  .wrapper {
    display: flex;
    background-color: #fff;
    flex-flow: column;
    justify-content: space-between;
    position: absolute;
    padding: 50px 30px 0;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
    transform: translateY(-100%);
    transition: all 0.6s cubic-bezier(0.52, 0.16, 0.24, 1);
  }

  .menu {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }

  .menu li {
    margin: 10px 0 10px;
    opacity: 0;
    transform: translateY(-30px);
    transition: all 0.4s ease;
  }

  .menu a {
    display: block;
    font-size: 32px;
    padding: 10px 0;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    color: #000;
    text-transform: capitalize;
  }

  .contact-wrapper {
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(-15px);
    transition: all 0.5s ease;
    transition-delay: 0.7s;
  }

  .button {
    width: 100%;
    padding: 16px 24px;
    margin-bottom: 20px;
  }

  .social-links__link {
    color: #b5b5b5 !important;
  }

  .social-links__link:hover {
    color: #000 !important;
  }

  ${({ isOpen }) =>
    isOpen
      ? css`
          pointer-events: auto;

          .wrapper {
            transform: translateY(0);
          }

          .menu li {
            opacity: 1;
            transform: none;
          }

          .contact-wrapper {
            opacity: 1;
            transform: translateY(0);
          }
        `
      : null}
`;

const Nav = ({ isOpen }) => {
  const renderNavLinks = () => {
    return Object.keys(links).map((key, index) => {
      const url = links[key];
      return (
        <li
          style={{
            transitionDelay: 400 + index * 25 + "ms"
          }}
          key={index}
        >
          <a href={url}>{key}</a>
        </li>
      );
    });
  };

  return (
    <Overlay isOpen={isOpen}>
      <div className="wrapper">
        <div className="menu">
          <ul>{renderNavLinks()}</ul>
        </div>
        <div className="contact-wrapper">
          <Button
            className="button"
            href="mailto:hello@tylerbenton.com"
            type="primary"
          >
            Send me a message
          </Button>
          <HorizontalSocialLinks />
        </div>
      </div>
    </Overlay>
  );
};

export default Nav;
