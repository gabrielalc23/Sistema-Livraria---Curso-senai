import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const CardsBooks = () => {

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
    <>
      <div className="container">
        <div className="col-sm-4 col-md-4 col-lg-4">

          {data.map((item) => (
            <Card key={item.id} className="mt-3">
              <div className="w-50 d-flex justify-content-center align-itemns-center">
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
                <Card.Text>
                  {item.imagens.map((imagem, index) => (
                    <img key={index} src={imagem.url} alt="" width={100} />
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
export default CardsBooks;
