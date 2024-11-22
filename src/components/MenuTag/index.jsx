import { Container } from "./styles";

export function MenuTag ({ title, ...rest }){
    return(
        <Container {...rest}>
            {title}
        </Container>
    );
}