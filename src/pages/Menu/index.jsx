import { Fragment } from "react";
import { BackgroundLateral, Container } from "./styles";
/*import { Foods } from "../../components/Foods";
import { Footer } from "../../components/Footer"*/
import { Header } from "../../components/Header"

import { Slider } from "../../components/Slider";



export function Menu() {
    return (
        <Fragment>

            <Header />
            
            <Container>                
                <BackgroundLateral />
                <div>
                    <h2>Sabores inigualáveis</h2>
                    <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
                </div>                
            </Container>

                <Slider />  
                <Slider /> 
                <Slider />  
                
        </Fragment>
    );
    
}

