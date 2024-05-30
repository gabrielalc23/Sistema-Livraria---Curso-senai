import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const CardsFilms = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://143.198.156.185/api/filmes');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="col-sm-4 col-md-4 col-lg-4">

                {data.map((item) => (
                    <Card key={item.id} className="mt-3 bg-warning rounded ">
                        <div className="w-50 mx-auto d-block mt-2">
                            <Card.Img variant="top" src={item.url_thumbnail} className="border border-4 rounded p-1 img-fluid" />
                        </div>
                        <Card.Body>
                            <Card.Title className="display-6 border-bottom border-2">{item.titulo}</Card.Title>
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
        </>
    )
}
export default CardsFilms;
