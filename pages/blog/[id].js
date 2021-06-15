import config from "../../config.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Row, Col, Card, Container } from "react-bootstrap";
import parse from "html-react-parser"; // TO BE USED ON INDIVIDUAL BLOG POST PAGE
import Head from "next/head";

export default function BlogSingle() {
  const [state, setState] = useState({
    blog: [],
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    id
      ? fetch("//" + config.api.url + ":" + config.api.port + "/api/blog/" + id)
          .then((response) => response.json())
          .then((data) => {
            setState({
              ...state,
              blog: data,
            });
          })
          .catch((error) => {
            console.log(error);
          })
      : "";
  }, [id]);

  return (
    <>
            <Container className="vh-100 white">

      <Row className="mb-2 mt-2">
        <Col xl={12}>
          {state.blog &&
            state.blog.map((post, i) => (
              <>
                <Head>
                  <title>camthegeek | {post.title}</title>
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <Card className="text-white border-0">
                  <Card.Img
                    className="featured_img_large"
                    variant="top"
                    src={`/images/${post.featured_img}`}
                  />
                  <Card.ImgOverlay className="overlay-dark d-flex flex-column">
                    <Card.Body>
                      <h2>{post.title}</h2>
                      <h6>
                        Written:{" "}
                        {new Intl.DateTimeFormat("en-US", {
                          dateStyle: "full",
                        }).format(`${post.timestamp}`)}
                      </h6>
                    </Card.Body>
                  </Card.ImgOverlay>
                </Card>
                <Card className="shadow">
                  <Card.Body>
                    <Card.Text>{parse(post.body)}</Card.Text>
                  </Card.Body>
                </Card>
              </>
            ))}
        </Col>
      </Row>
      </Container>
    </>
  );
}
