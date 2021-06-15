import { Row, Col, Container } from 'react-bootstrap';

const FooterA = () => {
        return (
            <footer className="justify-content-center mt-auto w-100 mt-auto py-3 bg-dark text-white text-center">
                         <Row>
                            <Col md={6} className="mt-2 mb-0">
                                <h5>Site</h5>
                                <ul className="list-unstyled">
                                    <li className="list-item"><a href="/">Home</a></li>
                                    <li className="list-item"><a href="/about">About</a></li>
                                    <li className="list-item"><a href="/projects">Projects</a></li>
                                    <li className="list-item"><a href="/blog">Blog</a></li>
                                </ul>
                            </Col>
                            <Col md={6} className="mt-2 mb-0">
                                <h5>Connect</h5>
                                <ul className="list-unstyled">
                                <li className="list-item"><a href="https://github.com/camthegeek">Github</a></li>
                                <li className="list-item"><a href="https://twitter.com/camthegeek_">Twitter</a></li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} className="mt-2 mb-0">
                                Copyright 2021 camthegeek
                            </Col>
                        </Row>
                        </footer>
        )
}
export default FooterA;