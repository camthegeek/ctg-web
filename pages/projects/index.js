import { ProjectListings } from "../../components/projects";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>camthegeek | Projects and more from camthegeek</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="vh-100 white">
        <Row>
          <Col>
            <h1>Projects</h1>
            <p>
              A selection of projects maintained, developed or in progress by
              camthegeek. For viewing code, please check{" "}
              <a href="https://github.com/camthegeek" target="_blank">
                camthegeek's Github
              </a>
            </p>
          </Col>
        </Row>
        <ProjectListings />
      </Container>
    </>
  );
}
