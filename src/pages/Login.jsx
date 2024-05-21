import { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Login = () => {
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const handlePasswordVisibility = () => {
        setVisible(!visible);
    }

    async function submitForm(event) {
        
        const [email,    setEmail]    = useState()
        const [password, setPassword] = useState()

        let   [message,  setMessage]  = useState("Usuario logado com sucesso")
        let   [confirm,  setConfirm]  = useState(null)
        let   [error,    setError]    = useState(null)

        let response = await axios.post('http://143.198.156.185/api/auth/login', {
            email    : email,
            password : password   
        }
        ).then(
            setMessage()
        ).catch(
            setError("Deu Penis")
        )
    } return (
        <>
            <div className="p-5 mt-5">
                <Container>
                    <Card>
                        <Card.Header className="bg-dark text-white">Form Login</Card.Header>
                        <Card.Body className="p-5 bg-dark">
                            <Form onSubmit={submitForm} method="get">
                                <Form.Label className="mt-4 text-white">Email</Form.Label>
                                <Form.Control type="email" placeholder="Insira seu email" required />
                                <Form.Label className="mt-2 text-white">Senha</Form.Label>
                                <div className="input-group">
                                    <Form.Control
                                        type={visible ? "text" : "password"}
                                        placeholder="Insira sua senha"
                                        required
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <Button variant="warning" className="input-group-text" onClick={handlePasswordVisibility}>
                                        {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Footer className="bg-dark">
                            <Button
                                type="submit"
                                variant="danger"
                                className=""
                                onClick={submitForm}
                            >Enviar
                            </Button>
                        </Card.Footer>
                    </Card>
                </Container>
            </div>
        </>
    );
};

export default Login;