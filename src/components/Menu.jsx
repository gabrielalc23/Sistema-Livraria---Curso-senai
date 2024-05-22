import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
    return (
        <>
            <Navbar className="navbar navbar-dark bg-dark fixed-top">
                <Navbar className="navbar navbar-dark bg-transparent">
                    <Nav className="me-auto">
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Livros">Livros</Nav.Link>
                        <Nav.Link href="/Filmes">Filmes</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/Cadastre-se">Cadastre-se</Nav.Link>
                    </Nav>
                </Navbar>
            </Navbar>

        </>
    );
}
export default Menu;