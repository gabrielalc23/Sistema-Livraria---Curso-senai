import { Carousel } from 'react-bootstrap';
import avatarImage from '../../public/FilmesImgs/avatarImage.jpg'
import vingadoresImage from '../../public/FilmesImgs/vingadoresImage.jpg';
import reileaoImage from '../../public/FilmesImgs/reileaoImage.jpg';


const FilmesCarrosel = () => {
    return (
        <>
            <div className="d-flex justify-content-center bg-dark">
                    <Carousel>
                        <Carousel.Item>
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
                        </Carousel.Item>
                    </Carousel>
                </div>
        </>
    );
}
export default FilmesCarrosel;