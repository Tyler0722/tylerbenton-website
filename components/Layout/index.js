import React, { useState } from "react";
import styled from "styled-components";

import { Header, Nav, Footer } from "components";

const StyledLayout = styled.div``;

const Layout = ({ children, inversed }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <StyledLayout>
      <Header handleClick={handleClick} isOpen={navIsOpen} />
      <Nav isOpen={navIsOpen} />
      <main>{children}</main>
      <Footer inversed={inversed} />
    </StyledLayout>
  );
};

export default Layout;
