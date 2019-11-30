import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { TYPE, ELEMENT } from "./constants";

/*
  /12  title6
  /24  title5
  32  title4
  42  title3
  /56  title2
  70  title1
  /100 display (1)
*/

const getFontSize = ({ type }) =>
  ({
    [TYPE.DISPLAY]: "8rem",
    [TYPE.TITLE1]: "7rem",
    [TYPE.TITLE2]: "5.6rem",
    [TYPE.TITLE3]: "4.2rem",
    [TYPE.TITLE4]: "3.2rem",
    [TYPE.TITLE5]: "2.4rem",
    [TYPE.TITLE6]: "1.2rem"
  }[type]);

const getLineHeight = ({ type }) =>
  ({
    [TYPE.DISPLAY]: 1,
    [TYPE.TITLE1]: 1,
    [TYPE.TITLE2]: 1.3,
    [TYPE.TITLE3]: 1,
    [TYPE.TITLE4]: 1,
    [TYPE.TITLE5]: 1.3,
    [TYPE.TITLE6]: 1
  }[type]);

const getFontWeight = ({ type }) => (type === TYPE.TITLE6 ? 500 : 700);

const StyledHeading = styled(({ element: Component, className, children }) => (
  <Component className={className}>{children}</Component>
))`
  color: ${({ color }) => color || "inherit"};
  font-size: ${getFontSize};
  line-height: ${getLineHeight};
  text-transform: ${({ type }) => (type === TYPE.TITLE6 ? "uppercase" : null)};
  letter-spacing: ${({ type }) => (type === TYPE.TITLE6 ? "1px" : 0)};
  font-weight: ${getFontWeight};
  margin-bottom: ${({ spaceAfter }) => spaceAfter}px;
`;

const Heading = ({
  spaceAfter = 0,
  children,
  color,
  element = ELEMENT.DIV,
  type = TYPE.TITLE1
}) => (
  <StyledHeading
    spaceAfter={spaceAfter}
    color={color}
    element={element}
    type={type}
  >
    {children}
  </StyledHeading>
);

export default Heading;
