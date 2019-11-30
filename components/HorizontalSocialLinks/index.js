import React from "react";
import styled from "styled-components";

import { SocialLinks } from "components";

const Wrapper = styled.div`
  .social-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    line-height: 0;
    max-width: max-content;
    margin: 0 auto;
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
`;

const HorizontalSocialLinks = (props) => (
  <Wrapper>
    <SocialLinks />
  </Wrapper>
);

export default HorizontalSocialLinks;
