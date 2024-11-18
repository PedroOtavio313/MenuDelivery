import { Container } from "./styles";

export function Input({ title, ...rest}){
    return(
        <Container type="input" {...rest} >
            {title}
        </Container>
    )
}