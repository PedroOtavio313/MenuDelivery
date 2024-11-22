import { Background, Container, Form } from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useState } from "react"



export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")

  const navigate = useNavigate()

function handleSignUp(){
  if(!name || !email | !password | !address){
    return alert ("Preencha todos os campos!")
  }
  api.post("/users", {name, email, password, address}).Backgroundthen(() => {
    alert("Usuário cadastrado com sucesso!")
    navigate("/")
  })
  .catch(error => {
    if(error.response){
      alert(error.response.data.message)
    }else{
      alert("Não foi possível efetuar o cadastro do usuário informado")
    }
  })
}






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

