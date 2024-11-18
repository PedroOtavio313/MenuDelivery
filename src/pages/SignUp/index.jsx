import { Background, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"



export function SignUp(){
  return(
    <Container>
      <Form>
    <h1>Sakura Sushi Delivery</h1>
    <h2>Tudo é uma experiência</h2>
    <h3> Crie sua conta</h3>

    
    <Input placeholder="Nome" type="text" />
    
    <Input placeholder="Endereço para entrega" type="text" />
    
    <Input placeholder="Email" type="text" />
    
    <Input placeholder="Senha" type="password"/>
    <Button title="Cadastrar"/>
    <a href="#">Já tenho uma conta</a>
    </Form>
    <Background />
    </Container>
  )
}

