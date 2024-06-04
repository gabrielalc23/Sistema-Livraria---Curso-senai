import { Container } from "react-bootstrap";
import FilmesCarrosel from "../components/FilmesCarrosel";
import CardsFilms from "../components/CardsFilms";


export default function Filme(){
    return (
            <div className="bg-dark">
                <Container>
                    <FilmesCarrosel />
                    <CardsFilms />
                </Container>
            </div>
    );
}
