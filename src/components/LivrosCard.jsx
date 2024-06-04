import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const LivrosCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://143.198.156.185/api/livros');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Row className="flex-nowrap overflow-auto">
        {data.map((item) => (
            <Col key={item.id} className="d-flex">
                <Card className="mt-3 bg-danger border border-light text-white mx-2">
                  <div className="w-50 d-flex justify-content-center align-items-center p-3">
                    <Card.Img variant="top" src={item.url_thumbnail} />
                  </div>
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>{item.sinopse}</Card.Text>
                    <Card.Text>
                      <strong>Categoria:</strong> {item.categoria}
                    </Card.Text>
                    <Card.Text>
                      <strong>Quantidade de favoritos:</strong> {item.qtd_favoritos}
                    </Card.Text>
                    <Card.Text>
                      <strong>Quantidade de valor:</strong> {item.qtd_valor}
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
  )
}

export default LivrosCard;
