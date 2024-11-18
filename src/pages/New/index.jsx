import { Footer } from '../../components/Footer/Index'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Container, Form } from './styles'



export function New(){
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <a href='/'>Voltar</a>
                        <h1>Adicionar prato</h1>
                    </header>
                        <Input placeholder="Nome do prato" />
                        <Textarea />
                </Form>
            </main>
        </Container>
    )
}