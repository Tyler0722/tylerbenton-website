import styled from "styled-components";

const Icon = styled.svg`
  fill: currentColor;
  height: 10px;
  margin-left: 0.5rem;
  transition: all 0.3s ease;
  width: 10px;
`;

const StyledGithubLink = styled.a`
  align-items: center;
  color: #333;
  border-radius: 4px;
  display: inline-flex;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  padding: 12px 24px;
  text-decoration: none;
  transition: all 0.3s ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  :hover ${Icon} {
    transform: translateX(0.5rem);
  }
`;

const GithubLink = () => (
  <StyledGithubLink rel="noopener" href="https://github.com/tyler0722" target="_blank">
    See all projects on Github{" "}
    <Icon viewBox="0 0 306 306">
      <polygon points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153" />
    </Icon>
  </StyledGithubLink>
);

export default GithubLink;
