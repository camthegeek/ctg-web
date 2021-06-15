import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import config from "../config.json";
import 'bootstrap/dist/css/bootstrap.css';

export const BlogPosts = () => {
  const [state, setState] = useState({
    blogs: [],
    loading: false,
    limit: ''
  });

  const removeTags = (str) => {
    return str !== null || str !== ""
      ? str.replace(/&nbsp;/g, " ").replace(/(<([^>]+)>)/gi, "")
      : "";
  };

  const truncate = (str) => {
    return str.length > 36 ? str.substring(0, 33) + "..." : str;
  };

  useEffect(() => {
    axios
      .get("//" + config.api.url + ":" + config.api.port + "/api/blogs")
      .then((blogs) => {
        var limit = '3';
        if (location.pathname === "/blog") {
            limit = 12
        }
        setState({
          ...state,
          blogs: blogs.data,
          loading: false,
          limit: limit
        });
      });
  }, []);


  return (
    <>
      {state.blogs.length < 1 && <h1>No blog posts are available.</h1>}

      {state.blogs.length > 1 && (
        <>
          <Row className="mb-2 mt-2" >
            <Col md={12}>
              <Row className="blogs mb-2 mt-2">
                {state.blogs
                  .slice(0,`${state.limit === "" || state.limit == null ? "3" : state.limit}`)
                  .map((blog, i) => (
                    <Col md={4} sm={12} className="mt-2"  key={i}>
                      <a href={`/blog/${blog.id}`}>
                        <Card className="text-white text-center">
                          <Card.Img
                            className="featured_img_small"
                            variant="top"
                            src={`/images/${blog.featured_img}`}
                          />
                          <Card.ImgOverlay className="overlay-dark d-flex flex-column">
                            <Card.Body>
                              <Card.Title className="mb-0">
                                {blog.title}
                              </Card.Title>
                              <Card.Text
                                className="m-0"
                                style={{ fontSize: "75%" }}
                              >
                                {new Intl.DateTimeFormat("en-US", {
                                  dateStyle: "full",
                                }).format(`${blog.timestamp}`)}
                              </Card.Text>
                              <Card.Text>
                                {truncate(removeTags(`${blog.body}`))}
                              </Card.Text>
                              <Badge bg="danger">
                                Read post
                              </Badge>        
                            </Card.Body>
                          </Card.ImgOverlay>
                        </Card>
                      </a>
                    </Col>
                  ))}
                  
              </Row>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
