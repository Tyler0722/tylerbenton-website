import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledGrid = styled(({ element: Component, className, children }) => {
  return <Component className={className}>{children}</Component>;
})`
  display: grid;
  grid-column-gap: 8rem;
  grid-row-gap: 10rem;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);

  @media screen and (max-width: 75em) {
    grid-column-gap: 4rem;
  }

  @media screen and (max-width: 48em) {
    grid-template-columns: 1fr;
  }
`;

const Grid = ({ element = "ul", className, columns = 2, children }) => {
  return (
    <StyledGrid className={className} columns={columns} element={element}>
      {children}
    </StyledGrid>
  );
};

Grid.propTypes = {
  element: PropTypes.oneOf(["ul", "div"]),
  columns: PropTypes.number
};

export default Grid;
