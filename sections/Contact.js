import React from "react";
import styled from "styled-components";

import { Heading, Container, Text, Profile, Button } from "components";

const Section = styled.section`
  background-color: #000;
  color: #fff;
  padding: 10rem 0 8rem;
  text-align: center;
`;

const TextContent = styled.div`
  max-width: 70rem;
  margin: 0 auto;
`;

const ContactSection = () => (
  <Section>
    <Container>
      <TextContent>
        <Text align="center" color="gray" spaceAfter={10}>
          What can I do for you?
        </Text>
        <Heading spaceAfter={30} type="title2">
          Get in touch
        </Heading>
        <Text align="center" size="large" spaceAfter={30}>
          I'm always happy to talk about working together, new opportunities or
          just answer questions. Send me an email and I'll get back at you as
          soon as possible.
        </Text>
        <Profile statusBorderColor="#000" />
        <Button
          href="mailto:hello@tylerbenton.com"
          target="_blank"
          type="primary"
          rel="noopener"
          spaceBefore={40}
        >
          Send me a message
        </Button>
      </TextContent>
    </Container>
  </Section>
);

export default ContactSection;
