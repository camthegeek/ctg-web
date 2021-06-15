import { BlogPosts } from '../../components/blog_posts';
import { Container, Row, Col } from 'react-bootstrap';
import Head from "next/head";

export default function Blog()  {
    return (
        <>
        <Head>
        <title>camthegeek | Thoughts, lessons and ramblings from camthegeek!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Container className="white">
            <Row>
                <Col>
                    <h1>Blog</h1>
                    <p>Thoughts, lessons and ramblings from camthegeek!</p>
                </Col>
            </Row>
            <BlogPosts/>
        </Container>

        </>
    )
}