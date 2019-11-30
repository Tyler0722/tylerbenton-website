import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { Container, Text, Heading, Button, Layout } from "components";

const Hero = styled.section`
  padding: 18rem 0 0;

  .lead {
    color: #303030;
  }
`;

const TextContent = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  text-align: ${({ align }) => align || "center"};
`;

const Status = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #2ffd0f;
`;

const EstimateIndicator = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  margin: 0 auto;
  margin-bottom: 3rem;

  ${Status} {
    margin-right: 1.2rem;
  }
`;

const Details = styled.section`
  padding: 14rem 0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 8rem;

  p {
    margin-bottom: 3rem;
  }

  p a {
    text-decoration: none;
    font-weight: 700;
    color: #3340ff;
  }

  p a:hover {
    text-decoration: underline;
  }

  a.cta-link {
    font-size: 3.2rem;
    font-weight: 700;
    transition: all 0.3s ease;
    color: #3340ff;
    text-decoration: none;
    display: block;
    max-width: max-content;
    margin: 0 auto;
  }

  a.cta-link:hover {
    transform: translateY(-2px);
  }
`;

const Contact = () => (
  <>
    <Head>
      <title>Contact - Tyler Benton - Full Stack Developer</title>
    </Head>
    <Layout inversed={true}>
      <Hero>
        <Container>
          <TextContent>
            <Text color="gray" spaceAfter={10}>
              What can I do for you?
            </Text>
            <Heading element="h1" type="title2" spaceAfter={20}>
              Get in touch
            </Heading>
            <Text class="lead" size="larger" spaceAfter={20}>
              I'm always happy to talk about working together, new opportunities
              or just answer questions. Send me an email and I'll get back at
              you as soon as possible.
            </Text>
            <EstimateIndicator>
              <Status />
              <Text size="small">Responds within 2-3 hours</Text>
            </EstimateIndicator>
            <Button
              target="_blank"
              href="mailto:hello@tylerbenton.com"
              type="primary"
            >
              Send me a message
            </Button>
          </TextContent>
        </Container>
      </Hero>
      <Details>
        <Container>
          <TextContent align="left">
            <Header>
              <Text color="gray" spaceAfter={10}>
                What I do
              </Text>
              <Heading element="h2" type="title3">
                Full Stack Development
              </Heading>
            </Header>
            <Text spaceAfter={30} size="large">
              As a full stack developer with an eye for design, I'm always
              focusing on building stuff which is functional and pleasing to the
              eye at the same time. I start every project with questions like
              how I'm going to implement this and why use this over that before
              I even start writing a single line of code.
            </Text>
            <Text size="large">
              I only work on projects I'm interested in to ensure the highest
              quality and enthusiasm. I'll only accept your project if I believe
              I can create value for your business and make the benefits greater
              than the money you spend.
            </Text>
          </TextContent>
          <CallToAction>
            <Text size="larger">
              You can send me an{" "}
              <a
                rel="noopener"
                href="mailto:hello@tylerbenton.com"
                target="_blank"
              >
                email
              </a>{" "}
              to contact me.
            </Text>
            <a
              rel="noopener"
              target="_blank"
              className="cta-link"
              href="mailto:hello@tylerbenton.com"
            >
              hello@tylerbenton.com
            </a>
          </CallToAction>
        </Container>
      </Details>
    </Layout>
  </>
);

export default Contact;
