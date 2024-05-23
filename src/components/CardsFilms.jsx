import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const CardsFilms = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://143.198.156.185/api/home');
                setData(response.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Card className="mt-5">
                <Card.Header>Veja papai</Card.Header>
                <Card.Body>
                    {data.map(item => (
                        <div key={item.id}>
                            <h2>{item.titulo}</h2>
                            <p>{item.sinopse}</p>
                            <p><img src={item.url_thumbnail} alt="" width={200} /></p>
                            <p>
                                <iframe
                                    src={item.url_video}
                                    frameborder="0"
                                    width="560"
                                    height="315"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </p>
                            <p>{item.qtd_favoritos}</p>
                            <p>{item.qtd_valor}</p>
                            <p>{item.categoria}</p>
                            <div>
                                {item.imagens.map((imagem, index) => (
                                    <img key={index} src={imagem} width={200} />
                                ))}
                            </div>
                        </div>

                    ))}
                </Card.Body>
            </Card>
        </>
    )
}
export default CardsFilms;
