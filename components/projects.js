import React, { useEffect, useState } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import axios from "axios";
import config from "../config.json";

export const ProjectListings = () => {
  const [state, setState] = useState({
    projects: [],
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
      .get("//" + config.api.url + ":" + config.api.port + "/api/projects")
      .then((projects) => {
        var limit = '3';
        if (location.pathname === "/projects") {
            limit = 12
        }
        setState({
          ...state,
          projects: projects.data,
          loading: false,
          limit: limit
        });
      });
  }, []);

  return (
    <>
      {state.projects.length < 1 && <h1>No projects posts are available.</h1>}

      {state.projects.length > 1 && (
        <>
          <Row className="mb-2 mt-2">
            <Col md={12}>
              <Row className="blogs mb-2 mt-2">
                {state.projects
                  .slice(
                    0,
                    `${
                      state.limit === "" || state.limit == null
                        ? "3"
                        : state.limit
                    }`
                  )
                  .map((project, i) => (
                    <Col md={4} sm={12} className="mt-2" key={i}>
                      <a href={`/projects/${project.id}`}>
                        <Card className="text-white text-center">
                          <Card.Img
                            className="featured_img_small"
                            variant="top"
                            src={`/images/${project.featured_img}`}
                          />
                          <Card.ImgOverlay className="overlay-dark d-flex flex-column">
                            <Card.Body>
                              <Card.Title className="mb-0">
                                {project.title}
                              </Card.Title>
                              <Card.Text>
                                {truncate(removeTags(`${project.body}`))}
                              </Card.Text>
                              <Badge bg="danger" className="font-weight-normal mr-2">
                                Read more
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
