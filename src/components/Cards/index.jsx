import { ButtonInclude } from "../ButtonInclude";
import { Container } from "./styles";
import { Foods } from "../Foods";


export function Cards({ name, description }){
    return(
        <Container>
            <img src= "/food1.png" />
            <span>{name}</span>
            <h4>{description}</h4>
            <Foods />
            <ButtonInclude />
        </Container>
    )
}