import React from "react";
import styled from "styled-components";

import { Layout, Text, Heading, Container } from "components";
import ContactSection from "sections/Contact";

const Hero = styled.section`
  padding: 18rem 0 0;

  img {
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
    display: block;
  }

  .lead {
    color: #303030;
    padding: 0 3rem 6rem;
  }

  @media screen and (max-width: 62.5em) {
    .lead {
      padding: 0;
      padding-bottom: 6rem;
    }
  }
`;

const TextContent = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
`;

const TextBlock = styled.div`
  max-width: 65rem;
  margin: 0 auto 10rem;

  a {
    text-decoration: none;
    color: #3340ff;
  }

  a:hover {
    text-decoration: underline;
  }

  .contact {
    font-weight: 700;
  }
`;

const AboutSection = styled.div`
  padding: 8rem 0 12rem;
`;

const About = () => (
  <Layout>
    <Hero>
      <Container>
        <TextContent>
          <Text color="gray" spaceAfter={10}>
            Nice to meet you
          </Text>
          <Heading spaceAfter={20} element="h1" type="title2">
            Hello, I'm Tyler
          </Heading>
          <Text className="lead" size="large">
            I'm a full stack developer building eye-pleasing applications for
            people on the internet to use from a wide range of technologies and
            software engineering principles.
          </Text>
        </TextContent>
      </Container>
      <img src="images/desk.jpeg" alt="desk" />
    </Hero>
    <AboutSection>
      <Container>
        <TextBlock>
          <Text size="large" color="gray" spaceAfter={8}>
            Summary
          </Text>
          <Heading element="h3" type="title3" spaceAfter={30}>
            Helping people grow
          </Heading>
          <Text size="large" spaceAfter={30}>
            I'm currently working on many side projects and teaching people to
            code on YouTube where you can find me building practical stuff with
            the latest technologies.
          </Text>
          <Text size="large" spaceAfter={30}>
            Outside of my full-time commitments, I learn new technologies to
            through books, documentation and blogs to create amazing products
            and keep myself constantly update-to-date on everything software
            development.
          </Text>
          <Text size="large" spaceAfter={30}>
            I'm passionate about building applications that use a wide range of
            technologies like React, Redux, Node, JavaScript, TypeScript,
            PostgreSQL and NGINX to bring ideas to life and gain the knowledge
            with every new product deployed.
          </Text>
          <Text size="large" spaceAfter={30}>
            I also love talking with other developers, reading documentation,
            blogs and sharing it with the community to help others grow as a way
            for me to retain information.
          </Text>
        </TextBlock>
        <TextBlock>
          <Text size="large" color="gray" spaceAfter={8}>
            Background story
          </Text>
          <Heading element="h3" type="title3" spaceAfter={30}>
            Doing what I love
          </Heading>
          <Text size="large" spaceAfter={30}>
            Programming has always been something I was into since high school.
            I learned to code on my own out of curiousity starting with Java to
            show friends what I was working on for a game called Minecraft which
            gave me the foundation to jump into other things.
          </Text>
          <Text size="large" spaceAfter={30}>
            This curiousity and drive helped me stay up-to-date to ensure I can
            use the most modern technologies and explain my reasoning. I believe
            in working hard and smart instead of searching for "hacks and
            shortcuts".
          </Text>
          <Text size="large" spaceAfter={30}>
            Nowadays, I've been fortunate enough to share and give back to the
            community by helping people solve their problems, writing{" "}
            <a
              rel="noopener"
              href="https://medium.com/@tylerray0722"
              target="_blank"
            >
              articles
            </a>
            , and sharing my{" "}
            <a
              rel="noopener"
              href="https://www.youtube.com/channel/UCtJlivoFe8Bz5tIgzqtUZAA"
              target="_blank"
            >
              knowledge on YouTube
            </a>{" "}
            to educate and inspire others to get into this.
          </Text>
        </TextBlock>
        <TextBlock>
          <Text size="large" color="gray" spaceAfter={8}>
            Why code?
          </Text>
          <Heading element="h3" type="title3" spaceAfter={30}>
            Building things people can use
          </Heading>
          <Text size="large" spaceAfter={30}>
            As more people get introduced to the internet and technology
            advance. I have a special opportunity to build anything no matter
            the complexity and have anyone use it.
          </Text>
          <Text size="large" spaceAfter={30}>
            Coding allows me to constantly learn and think of everything in a
            logical way. Everybody enjoys using their devices whether it's for
            work or play and this is why I love building well polished
            applications that makes me and the end users happy.
          </Text>

          <Text className="contact" size="large" spaceAfter={30}>
            If you'd like to know more about me, my work or have any questions,
            feel free to{" "}
            <a
              rel="noopener"
              href="mailto:hello@tylerbenton.com"
              target="_blank"
            >
              send me an email anytime
            </a>
            .
          </Text>
        </TextBlock>
      </Container>
    </AboutSection>
    <ContactSection />
  </Layout>
);

export default About;
