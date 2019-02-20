import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import image from '../images/simon-abrams-286276-unsplash.jpg';

function Info() {
  return (
    <Container>
      <Row>
        <Col>
          <Header title='Info' />
        </Col>
      </Row>

      <Row>
        <Col>
          <img src={image} width="300" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Info;
