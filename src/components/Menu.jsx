import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
    return (
        <>
            <Navbar className="navbar navbar-dark bg-dark fixed-top">
                <Nav className="me-auto" activeKey="/Home">
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Livros">Livros</Nav.Link>
                    <Nav.Link href="/Filmes">Filmes</Nav.Link>
                </Nav>
                <Nav className="ms-auto gap-2">
                    <Nav.Link href="/Cadastre-se" className="btn btn-outline-success pr-5">Cadastre-se</Nav.Link>
                    <Nav.Link href="/Login" className="btn btn-outline-info pr-5">Login</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}
export default Menu;