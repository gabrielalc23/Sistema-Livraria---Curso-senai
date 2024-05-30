import { Container } from "react-bootstrap";
import LivrosCarrosel from "../components/LivrosCarrosel.jsx";
import LivrosCard from "../components/LivrosCard.jsx";

const Livros = () => {
    return (
        <>
            <div className="bg-dark">
                <LivrosCarrosel />
                <LivrosCard />
            </div>
            </>
);
}
export default Livros;