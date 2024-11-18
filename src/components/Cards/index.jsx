import { ButtonInclude } from "../ButtonInclude";
import { Container } from "./styles";


export function Cards(){
    return(
        <Container>
            <img src= "assets/food1.png" />
            <h2>Spaguetti Gambe</h2>
            <h4>Massa fresca com camarões e pesto</h4>
            <ButtonInclude />
        </Container>
    )
}