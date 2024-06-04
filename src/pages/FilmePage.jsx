import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Container, Image, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const FilmePage = () => {
  const { id } = useParams();
  const [filme, setFilme] = useState({});

  useEffect(() => {
    axios.get(`http://143.198.156.185/api/filmes/porid/${id}`)
     .then(response => setFilme(response.data))
     .catch(error => console.log(error));
  }, [id]);

  return (
    <Container className="mt-5 p-5">
      <Card className="shadow-sm">
        <Card.Header className="bg-dark text-white">
          <h5>{filme.titulo}</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <Image
                src={filme.imagens && filme.imagens[1].url}
                height={500}
                className="img-fluid p-3"
              />
            </Col>
            <Col md={8}>
              <p className="text-light bg-dark p-4 rounded">{filme.sinopse}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FilmePage;