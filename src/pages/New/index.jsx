import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Container, Form } from './styles'
import { Section } from '../../components/Section'
import { MenuTag } from '../../components/MenuTag'
import { useState } from 'react'
import { Button } from '../../components/Button'
import { api } from '../../services/api'





export function New(){

const [title, setTitle] = useState("")
const [description, setDescription] = useState("")    
const [tags, setTags] = useState([])
const [newTag, setNewTag] = useState("")


function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
}

function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

async function handleNewPlate() {
    await api.post("/", {
        title,
        description,
        tags
    })
}

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
                        <Input placeholder="Nome do prato" onChange={e => setTitle(e.target.value)} />
                        <Textarea placeholder="Descrição" onChange={e => setDescription=(e.target.value)} />

                        <label for="category">Categoria</label>
                        <select id="category" name="category" class="dropdown">
                            <option value="Refeição">Refeição</option>
                            <option value="Refeição">Bebida</option>
                            <option value="Refeição">Sobremesa</option>
                        </select>

                        <Section title="Marcadores">
                            <div className='tags'>
                                {
                                   tags.map((tag,index) => {
                                    <MenuTag key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)} />
                                   })                                   
                                }

                                <MenuTag isNew placeholder="Nova tag" onChange= {e => setNewTag(e.target.value)} value={newTag} onClick={handleAddTag} />

                                <MenuTag 
                                isNew 
                                placeholder="Nova tag"
                                onChange={e => setNewItem(e.target.value)}
                                value="novoItem"
                                />
                            </div>
                        </Section>
                        <Button title="Salvar alterações" onClick={handleNewPlate} />
                        
                    </div>
                    
                </Form>  
            </main>
        </Container>
    )
}