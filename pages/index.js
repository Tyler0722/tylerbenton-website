import React from "react";
import Head from "next/head";
import styled from "styled-components";

import {
  Container,
  Layout,
  Profile,
  Heading,
  Text,
  SocialLinks,
  Button,
  Projects,
  GithubLink
} from "components";

export const Hero = styled.section`
  padding: 16rem 0 12rem;
`;

export const HeroIntro = styled.div`
  max-width: 58rem;
`;

// Work section
export const WorkSection = styled.section`
  padding: calc(8rem + 50px) 0 12rem;
`;

// Story section
export const StorySection = styled.section`
  background-color: #fcfcfc;

  ${Container} {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 48em) {
    ${Container} {
      flex-flow: column;
    }
  }
`;

export const StoryText = styled.div`
  margin-right: 8rem;
  max-width: 60rem;

  @media screen and (max-width: 48em) {
    margin-right: 0;
    max-width: 100%;
  }
`;

export const SocialLinksContainer = styled.div`
  margin-top: 4.5rem;
  max-width: 22rem;

  .social-links {
    margin-left: -1.2rem;
  }

  .social-links__item {
    line-height: 1;
    margin-bottom: 3rem;
  }

  .social-links__link {
    align-items: center;
    border-radius: 0.25em;
    color: #000;
    display: inline-flex;
    font-size: 1.6rem;
    line-height: 1;
    padding: 0.375em 0.75em;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .social-links__link:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: #3340ff;
  }

  .social-links__icon {
    fill: #3340ff;
    height: 2rem;
    width: 2rem;
  }

  .social-links__text {
    font-size: 1.6rem;
    margin-left: 1.4rem;
  }
`;

export const GithubLinkContainer = styled.div`
  margin: 6rem auto 0;
  max-width: max-content;
`;

import ContactSection from "sections/Contact";

const Landing = (props) => {
  return (
    <>
      {" "}
      <Head>
        <title>Tyler Benton - Full Stack Developer</title>
      </Head>
      <Layout>
        <Hero>
          <Container>
            <HeroIntro>
              <Heading element="h1" type="display">
                Full-Stack Developer
              </Heading>
              <Text
                color="darkGray"
                spaceAfter={30}
                spaceBefore={30}
                size="larger"
              >
                Currently building open source applications using a wide range
                of technologies and software engineering principles.
              </Text>
              <Button href="#work" spaceAfter={60} type="primary">
                See work
              </Button>
              <Profile />
            </HeroIntro>
          </Container>
        </Hero>
        <WorkSection id="work">
          <Container>
            <Heading color="#b0b0b0" element="h4" spaceAfter={30} type="title6">
              Recent Work
            </Heading>
            <Projects />
            <GithubLinkContainer>
              <GithubLink />
            </GithubLinkContainer>
          </Container>
        </WorkSection>
        <StorySection>
          <Container>
            <StoryText>
              <Text color="gray" spaceAfter={10}>
                Nice to meet you
              </Text>
              <Heading spaceAfter={30} type="title2">
                Hello, I'm Tyler
              </Heading>
              <Text size="largest" spaceAfter={30}>
                I work as a full-stack developer building applications and
                sharing my knowledge to many in various ways.
              </Text>
              <Text size="large" spaceAfter={30}>
                I'm currently working on many side projects and teaching people
                to code on YouTube where you can find me building practical
                stuff with the latest technologies.
              </Text>
              <Text size="large" spaceAfter={30}>
                Outside of my full-time commitments, I learn new technologies to
                through books, documentation and blogs to create amazing
                products and keep myself constantly update-to-date on everything
                software development.
              </Text>
              <Text size="large" spaceAfter={30}>
                I'm passionate about building applications that use a wide range
                of technologies like React, Redux, Node, JavaScript, TypeScript,
                PostgreSQL and NGINX to bring ideas to life and gain the
                knowledge with every new product deployed.
              </Text>
            </StoryText>
            <SocialLinksContainer>
              <Heading spaceAfter={6} type="title5">
                Stay connected
              </Heading>
              <Text color="gray" size="small" spaceAfter={40}>
                You can find me on YouTube teaching people how to code.
              </Text>
              <SocialLinks />
            </SocialLinksContainer>
          </Container>
        </StorySection>
        <ContactSection />
      </Layout>
    </>
  );
};

export default Landing;
