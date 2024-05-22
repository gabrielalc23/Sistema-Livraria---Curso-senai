import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios";

const Cadastro = () => {

    const [visible, setVisible]   = useState(false);

    const [name, setName]         = useState()
    const [email, setEmail]       = useState()
    const [password, setPassword] = useState()

    let   [message,  setMessage]  = useState("Usuario logado com sucesso")
    let   [confirm,  setConfirm]  = useState(null)
    let   [error,    setError]    = useState(null)

    const handlePasswordVisibility = () => {
        setVisible(!visible);
    }

    async function submitForm(event) {

        axios.post('http://143.198.156.185/api/auth/register', {
            name,
            email,
            password
        })
            .then(response => {
                console.log(JSON.stringify(response.data));
                setMessage("Usuário criado com sucesso");
                setConfirm(true);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setConfirm(false);
            });
    }
    return (
        <>
            <Card className="pt-5 mt-5">
                <Card.Header className="text-center bg-dark text-white">Cadastre-se</Card.Header>
                <Card.Body className="bg-dark">
                    <Form.Label>Digite o seu nome</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Insira seu nome"
                        onChange={n => setName(n.target.value)}
                        required />
                    <Form.Label>Digite o seu email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Insira seu email"
                        onChange={e => setEmail(e.target.value)}
                        required />
                    <Form.Label>Digite a sua senha</Form.Label>

                    <div className="input-group">

                        <Form.Control
                            type={visible ? "text" : "password"}
                            placeholder="Insira sua senha"
                            onChange={p => setPassword(p.target.value)}
                            required 
                            minLength={6}
                        />
                        <Button
                            variant="warning"
                            className="input-group-text"
                            onClick={handlePasswordVisibility}>
                            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </Button>
                    </div>
                    <Button
                        type="submit"
                        variant="danger"
                        className="mt-3"
                        onClick={submitForm}
                    >Enviar</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default Cadastro;