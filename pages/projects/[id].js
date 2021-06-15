import config from "../../config.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Row,
  Col,
  Card,
  Container
} from "react-bootstrap";
import parse from 'html-react-parser'; // TO BE USED ON INDIVIDUAL BLOG POST PAGE
import Head from "next/head";

export default function ProjectSingle() {
  const [state, setState] = useState({
    project: []
  })
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id
      ? fetch(
        "//" + config.api.url + ":" + config.api.port + "/api/project/" + id
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setState({
            ...state,
            project: data
          })
        })
        .catch((error) => {
          console.log(error);
        })
      : "";
  }, [id]);

  return (
    <Container className="white">

    <Row className="mb-2 mt-2">
      <Col xl={12}>

        {state.project &&
          state.project.map((post, i) => (
            <>
             <Head>
        <title>camthegeek | Project: {post.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
              <Card className="text-white border-0">
                <Card.Img className="featured_img_large" variant="top" src={`/images/${post.featured_img}`} />
                <Card.ImgOverlay className="overlay-dark d-flex flex-column">
                  <Card.Body>
                    <h2>{post.title}</h2>
                  </Card.Body>
                </Card.ImgOverlay>
              </Card>
              <Card className="shadow">
                <Card.Body>
                  <Card.Text>
                    {parse(post.body)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </>

          ))}

      </Col>
    </Row>
    </Container>
  );
}
