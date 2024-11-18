import { Background, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Login(){
  return(
    <Container>
      <Form>
    <h1>Sakura Sushi Delivery</h1>
    <h2>Tudo é uma experiência</h2>

    <Input placeholder="Email" type="text" />
    <Input placeholder="Senha" type="password"/>
    <Button title="Login"/>
    <a href="#">Não tem conta? Crie uma aqui!</a>
    </Form>
    <Background />
    </Container>
  )
}

