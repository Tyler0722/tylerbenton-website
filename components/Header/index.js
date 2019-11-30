import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { Container, Button } from "components";

const links = [
  {
    link: "/",
    name: "home"
  },
  {
    link: "/about",
    name: "about"
  },
  // {
  //   link: "/blog",
  //   name: "blog"
  // }
];

const StyledHeader = styled.header`
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 20;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  li {
    display: inline-block;
    margin-right: 80px;
    line-height: 1;
  }

  li:last-child {
    margin-right: 0;
  }

  li a {
    display: inline-block;
    color: #000;
    text-decoration: none;
    text-transform: capitalize;
    font-size: 14px;
    padding: 10px;
    transition: all 0.3s ease;
  }

  li a:hover {
    opacity: 0.5;
  }

  nav + a {
    padding: 8px 16px;
    font-size: 14px;
  }

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 48em) {
    nav,
    .contact-button {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }
`;

const Logo = styled.div`
  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  span {
    color: #3340ff;
  }
`;

const Header = ({ handleClick, isOpen }) => {
  return (
    <StyledHeader>
      <Container>
        <Logo>
          <Link href="/">
            <a>
              Tyler<span>Benton</span>
            </a>
          </Link>
        </Logo>
        <nav>
          <ul>
            {links.map(({ link, name }, index) => (
              <li key={index}>
                <Link as={link} href={link}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="contact-button" href="/contact" type="primary">
          Contact
        </Button>
        <button aria-label="open menu" className={"hamburger" + (isOpen ? " open" : "")} onClick={() => handleClick()}>
          <div className="box">
            <div className="inner"></div>
          </div>
        </button>
      </Container>
    </StyledHeader>
  );
};

export default Header;
