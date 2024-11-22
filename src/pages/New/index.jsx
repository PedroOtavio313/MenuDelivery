import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Container, Form } from './styles'
import { Section } from '../../components/Section'
import { MenuTag } from '../../components/MenuTag'




export function New(){
    return(
        <Container>
            <Header />
            <main>
                <Form>

                    <header>
                        <a href='/'>Voltar</a>
                        <h1>Adicionar ou alterar prato</h1>
                    </header>

                    <div class="plate-options">
                        <Input placeholder="Nome do prato" />
                        <Textarea placeholder="Observações"/>
                        <label for="category">Categoria</label>
                        <select id="category" name="category" class="dropdown">
                            <option value="Refeição">Refeição</option>
                            <option value="Refeição">Bebida</option>
                            <option value="Refeição">Sobremesa</option>
                        </select>
                        <Section title="Marcadores">
                            <div className='tags'>
                                {
                                    
                                    <MenuTag value="salmão" />
                                    
                                }
                                <MenuTag 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewItem(e.target.value)}
                                value="novoItem"
                                />
                            </div>
                        </Section>
                        <button title="Salvar" />
                        
                    </div>
                    
                </Form>  
            </main>
        </Container>
    )
}