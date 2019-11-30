import React from "react";
import styled, { css } from "styled-components";

import { Container, Button, Text, SocialLinks, Profile } from "components";

const Copyright = styled.p`
  text-align: center;
  padding: 2rem 0 6rem;
  font-size: 1.2rem;
  color: #808080;

  a {
    color: #fff;
    opacity: 0.7;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  a:hover {
    opacity: 1;
    text-decoration: none;
  }
`;

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;

  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    line-height: 0;
    justify-content: center;
  }

  .social-links__item {
    line-height: 0;
    margin: 0 1.5rem;
  }

  .social-links__link {
    align-items: center;
    border-radius: 0.25em;
    color: #828282;
    display: inline-flex;
    font-size: 1.6rem;
    line-height: 1;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .social-links__link:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: #fff;
  }

  .social-links__icon {
    fill: currentColor;
    height: 2rem;
    width: 2rem;
  }

  .social-links__text {
    display: none;
  }

  ${({ inversed }) =>
    inversed
      ? css`
          color: #b5b5b5;
          background-color: #fff;

          .social-links__link {
            color: inherit;
          }

          .social-links__link:hover {
            color: #3340ff;
          }

          ${Copyright} {
            color: #808080;
          }

          ${Copyright} a {
            opacity: 1;
            color: #808080;
          }

          ${Copyright} a:hover {
            color: #3340ff;
          }
        `
      : null}
`;

const Footer = ({ inversed }) => {
  return (
    <StyledFooter inversed={inversed}>
      <Container>
        <SocialLinks />
        <Copyright>
          © 2019 All rights reserved. –{" "}
          <a href="/">Developed by Tyler Benton</a>
        </Copyright>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
