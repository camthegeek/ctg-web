import { Row, Col, Container, Button } from "react-bootstrap";
import Head from "next/head";

export const AboutHero = () => {
  const styles = {
    jumboBG: {
      backgroundImage: "url(./images/hero_bg_puzzle.png)",
      height: "600px",
      width: "100%",
      color: "#ffffff",
      lineHeight: "600px",
      textAlign: "center",
    },
    about: {
      lineHeight: "1.5",
      display: "inline-block",
      verticalAlign: "middle",
    },
  };
  return (
    <Container fluid style={styles.jumboBG}>
      <Container style={styles.about}>
        <h1>Hi, I'm Cam.</h1>
        <h2>I wrangle code to make it do what I want.</h2>
        <a href="/projects">
          <Button>View my projects</Button>
        </a>
      </Container>
    </Container>
  );
};

const About = () => {
  return (
    <>
      <Head>
        <title>camthegeek | Who is camthegeek? - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="white">
        <Row>
          <Col xl={12}>
            <h1>about camthegeek</h1>
            <p>
              I'm a developer. I often find myself coding just to pass the time.{" "}
            </p>

            <p>
              More importantly, I'm a dad, husband and a pretty relaxed person
              once you get to know me.
            </p>

            <p>
              From a software development point of view, I have been doing
              development for over 15 years but only 8 of those years are in a
              professional environment. I have never attended a code bootcamp. I
              have never went to school to learn to code. I have spent countless
              hours in the early mornings, late nights and in between learning
              new technologies and how to use them. I once held certifications
              for things like CompTIA A+, Network+, Security+, Adobe Certified
              Associate, and many others but lost interest in all of those
              because developing websites, applications, scripts and libraries
              peaked my interest more than anything.
            </p>

            <p>
              You could also say I have a very heavy entrepreneurial spirit in
              me as I am constantly looking, and building, ways to generate
              income by developing applications and websites!{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
