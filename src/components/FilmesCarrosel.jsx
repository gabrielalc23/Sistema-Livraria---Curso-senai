import { Carousel, Row } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';


const FilmesCarrosel = () => {
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
            <div className="d-flex justify-content-center bg-dark">
                <Row className="pt-2 pb-3">
                    <Carousel>
                        {data.map((filme, index) => (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={filme.imagens[1].url}
                                    alt={filme.titulo}
                                    width={1000}
                                    style={{ maxHeight: 1500, objectFit: 'cover', maxWidth: 1000, objectFit: 'cover' }}
                                />
                                <Carousel.Caption>
                                    <h3>{filme.title}</h3>
                                    <p>{filme.sinopse}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row>


                {/* <Carousel.Item>
                            <img src={avatarImage} className='w-100' />
                            <Carousel.Caption>
                                <h1>Avatar</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={vingadoresImage} className='w-100 ' />
                            <Carousel.Caption>
                                <h1>Vingadores</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={reileaoImage} className='w-100' />
                            <Carousel.Caption>
                                <h1>O Rei Leão</h1>
                            </Carousel.Caption>
                        </Carousel.Item> */}
            </div >
        </>
    );
}
export default FilmesCarrosel;