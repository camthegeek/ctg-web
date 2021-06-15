import { Container } from "react-bootstrap";
import { useEffect } from "react";
import Navigation from "./navigation";
import FooterA from "./footer";

const SiteLayout = ({ children }) => {
  return (
    <>
      <Container fluid>
        <Navigation />
        {children}
      </Container>
      <FooterA />
    </>
  );
};

export default SiteLayout;
