import React from "react";
import styled from "styled-components";

import { Text } from "components";

const StyledProfile = styled.div`
  a {
    display: inline-flex;
    text-decoration: none;
    align-items: center;
    color: inherit;
    transition: all 0.3s ease;
    font-size: 14px;
  }

  a:hover {
    color: #3340ff;
  }
`;

const AvatarContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;

  picture,
  img {
    border-radius: 50%;
    width: 100%;
  }
`;

const Status = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: #2ffd0f;
  position: absolute;
  border: 2px solid ${({ borderColor }) => borderColor || "#fff"};
  right: 0;
  bottom: 0;
`;

const TextContainer = styled.div`
  margin-left: 10px;
`;

const Profile = (props) => {
  const { statusBorderColor } = props;
  return (
    <StyledProfile>
      <a rel="noopener" href="mailto:tylerbenton@gmail.com" target="_blank">
        <AvatarContainer>
          <picture>
            <source srcSet="images/tyler.jpeg" type="image/jpeg" />
            <img src="images/tyler.webp" alt="Tyler Benton" />
          </picture>
          <Status borderColor={statusBorderColor} />
        </AvatarContainer>
        <TextContainer>Responds within 2-3 hours</TextContainer>
      </a>
    </StyledProfile>
  );
};

export default Profile;
