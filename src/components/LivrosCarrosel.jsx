import { Carousel } from 'react-bootstrap';

const bookImages = [
  {
    src: '../../public/LivrosImgs/theWitcherImage.jpg',
    title: 'The Witcher',
  },
  {
    src: '../../public/LivrosImgs/harryPotterImage.jpg',
    title: 'Harry Potter',
  },
  {
    src: '../../public/LivrosImgs/senhorDosAneisImage.jpg',
    title: 'Senhor dos Anéis',
  },
];

const BookCarousel = () => {
  return (
    <Carousel>
      {bookImages.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image.src} className="w-100 rounded" />
          <Carousel.Caption>
            <h1 className="">{image.title}</h1>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const LivrosCarrosel = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="col-sm-8 col-lg-8 col-md-8 mt-4" >
          <Carousel className="mt-5">
            {bookImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image.src} className="w-100" />
                <Carousel.Caption>
                  <h1>{image.title}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default LivrosCarrosel;