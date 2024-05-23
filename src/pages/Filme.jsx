import { Container } from "react-bootstrap";
import FilmesCarrosel from "../components/FilmesCarrosel";
import CardsFilms from "../components/CardsFilms";


const Filme = () => {
    return (
            <div className="bg-dark">
                <Container>
                    <FilmesCarrosel />
                    <CardsFilms />
                </Container>
            </div>
    );
}
export default Filme;
