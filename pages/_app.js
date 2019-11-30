import React from "react";
import App from "next/app";
import { createGlobalStyle } from "styled-components";

// 1200 (75em), 1000 (62.5em) 768 (48rem)

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  @media screen and (max-width: 62.5em) {
    html {
      font-size: 50%;
    }
  }

  body {
    color: #000;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }

  img, picture, video {
    vertical-align: middle;
  }

  button:focus {
    outline: none;
  }

  ul {
    list-style: none;
  }

  section {
    padding: 12rem 0;
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
