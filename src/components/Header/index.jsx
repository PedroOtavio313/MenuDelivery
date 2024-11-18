import React from "react";
import { AnimatedButton , Container, Searchbar, LogOutButton, HomeButton } from "./styles";
import { SignOut }  from "@phosphor-icons/react"

export function Header() {
    return(
        <Container>
            <HomeButton>
            <span><a href="#">Sakura</a></span>
            </HomeButton>
            <Searchbar placeholder="Busque por pratos ou ingredientes"/>
            <AnimatedButton>
                <span>Meu carrinho </span>
            </AnimatedButton>
            <LogOutButton>
            <SignOut size={32} weight="bold" /> 
            </LogOutButton>
        </Container>
    )
}
