import { Button, Card, CardBody, CardFooter, CardHeader, Container } from "react-bootstrap";

const bookData = [
  {
    title: "Harry Potter",
    image: "/LivrosImgs/livroHarry.jpg",
    width: 200,
  },
  {
    title: "Senhor dos Anéis",
    image: "/LivrosImgs/senhorDosAneisLivroImage.jpg",
    width: 190,
  },
  {
    title: "The Witcher",
    image: "/LivrosImgs/theWitcherLivro.jpg",
    width: 195,
  },
];

const BookCard = ({ title, image, width }) => {
  return (
    <Card className="mt-5 col-sm-3 col-md-2 col-lg-2 bg-dark">
      <CardHeader className="text-white text-center">{title}</CardHeader>
      <CardBody className="d-flex align-items-center justify-content-center ">
        <img src={image} alt={`${title} book cover`} width={width} className="border border-light rounded mw-100" />
      </CardBody>
      <CardFooter>
        <a className="text-white-50" href="">
          Saiba Mais
        </a>
      </CardFooter>
    </Card>
  );
};

const LivrosCard = () => {
  return (
    <Container className="bg-dark mt-5 rounded">
      <div className="d-flex d-grid gap-2">
        {bookData.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </Container>
  );
};

export default LivrosCard;