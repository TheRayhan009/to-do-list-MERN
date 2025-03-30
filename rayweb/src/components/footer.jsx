import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export default function Footerx() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md="auto" className="d-flex align-items-center mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <div className="d-flex space-x-2">
                <div
                  className="bg-white rounded-circle"
                  style={{ width: "16px", height: "16px" }}
                ></div>
                <div className="bg-white" style={{ width: "16px", height: "16px" }}></div>
                <div
                  className="bg-white rounded-circle border border-white"
                  style={{ width: "16px", height: "16px" }}
                ></div>
              </div>
              <span className="ml-2 h5 mb-0">Noun Project</span>
            </div>
          </Col>
          <Col md="auto" className="d-flex justify-content-center mb-3 mb-md-0">
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a href="#" className="text-white mx-2">
              <FontAwesomeIcon icon={faBehance} />
            </a>
          </Col>
          <Col md="auto" className="d-flex justify-content-center mb-3 mb-md-0">
            <a href="#" className="text-white mx-2">
              About Us
            </a>
            <a href="#" className="text-white mx-2">
              Contact Us
            </a>
            <a href="#" className="text-white mx-2">
              Customer Support
            </a>
            <a href="#" className="text-white mx-2">
              Jobs
            </a>
            <a href="#" className="text-white mx-2">
              Legal
            </a>
          </Col>
          <Col md="auto" className="d-flex align-items-center">
            <span className="mr-2">Subscribe to Noun Gazette</span>
            <Form inline>
              <Form.Control type="email" placeholder="Enter your email" className="mr-2" />
              <Button variant="light">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <span>© Noun Project Inc.</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
