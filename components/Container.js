import styled from "styled-components";

const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 75em) {
    max-width: 90rem;
  }

  @media screen and (max-width: 62.5em) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 48em) {
    max-width: 50rem;
    padding: 0 3rem;
  }
`;

export default Container;
