import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ELEMENT, SIZE, WEIGHT } from "./constants";

// 10, 30, 60
// 12 (smallest) (1.3), small 14 (1.6), 18 (normal) (1.6), 20 (large) (1.6), 24 (larger) (1.6), 28 (largest) (1.6)

const getSize = ({ size }) =>
  ({
    [SIZE.SMALLEST]: "1.2rem",
    [SIZE.SMALL]: "1.4rem",
    [SIZE.NORMAL]: "1.8rem",
    [SIZE.LARGE]: "2rem",
    [SIZE.LARGER]: "2.4rem",
    [SIZE.LARGEST]: "2.8rem"
  }[size]);

const getTextAlign = ({ align }) => align;

const getLineHeight = ({ size }) => (size === SIZE.SMALLEST ? 1.3 : 1.6);

const getFontWeight = ({ weight }) =>
  ({
    [WEIGHT.NORMAL]: 400,
    [WEIGHT.MEDIUM]: 500,
    [WEIGHT.BOLD]: 700,
    [WEIGHT.EXTRABOLD]: 800
  }[weight]);

const getColor = ({ color }) =>
  ({
    gray: "#828282",
    darkGray: "#4A4A4A",
    veryDarkGray: "#303030",
    black: "#000"
  }[color]);

const StyledText = styled(({ element: Component, className, children }) => (
  <Component className={className}>{children}</Component>
))`
  text-align: ${getTextAlign};
  font-size: ${getSize};
  line-height: ${getLineHeight};
  color: ${getColor};
  margin-bottom: ${({ spaceAfter }) => spaceAfter}px;
  margin-top: ${({ spaceBefore }) => spaceBefore}px;
  font-weight: ${getFontWeight};
`;

const Text = ({
  element = ELEMENT.P,
  className,
  children,
  color,
  size = SIZE.NORMAL,
  weight = WEIGHT.NORMAL,
  align,
  uppercase = false,
  italic = false,
  spaceBefore = 0,
  spaceAfter = 0
}) => (
  <StyledText
    element={element}
    align={align}
    className={className}
    color={color}
    size={size}
    weight={weight}
    italic={italic}
    uppercase={uppercase}
    spaceBefore={spaceBefore}
    spaceAfter={spaceAfter}
  >
    {children}
  </StyledText>
);

Text.propTypes = {
  element: PropTypes.oneOf([ELEMENT.DIV, ELEMENT.P, ELEMENT.SPAN]),
  size: PropTypes.oneOf([
    SIZE.SMALLEST,
    SIZE.SMALL,
    SIZE.NORMAL,
    SIZE.LARGE,
    SIZE.LARGER,
    SIZE.LARGEST
  ])
};

export default Text;
