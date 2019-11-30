import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Button = styled((props) => {
  const { children, className, href, ...rprops } = props;
  return href.charAt(0) == "/" ? (
    <Link as={href} href={href}>
      <a className={className}>{children}</a>
    </Link>
  ) : (
    <a rel="noopener" href={href} className={className}>
      {children}
    </a>
  );
})`
  background-color: ${({ type }) =>
    type === "primary" ? "#3340ff" : "#f5f5f5"};
  border: 1px solid transparent;
  border-radius: 0.25em;
  color: ${({ type }) => (type === "primary" ? "#fff" : "#000")};
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  padding: 1.4rem 2.4rem;
  text-align: center;
  text-decoration: none;
  transition: 0.3s ease;
  margin-bottom: ${({ spaceAfter = 0 }) => spaceAfter}px;
  margin-top: ${({ spaceBefore = 0 }) => spaceBefore}px;
  white-space: nowrap;
`;

export default Button;
