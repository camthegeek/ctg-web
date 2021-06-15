import Head from "next/head";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BlogPosts } from "../components/blog_posts";
import { ProjectListings } from "../components/projects";
import { AboutHero } from "./about";

export default function Home() {
  return (
    <>
      <Head>
        <title>camthegeek | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutHero />
      <Container className="white">
        <Row className="blog">
          <Col xs={12}>
            <h2>Recent blog posts</h2>
            <BlogPosts />
          </Col>
        </Row>
        <Row className="blog">
          <Col xs={12}>
            <h2>Hightlighted projects</h2>
            <ProjectListings />
          </Col>
        </Row>        
      </Container>
    </>
  );
}
