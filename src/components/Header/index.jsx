import React from "react";
import { AnimatedButton , Container, Searchbar, LogOutButton, HomeButton } from "./styles";
import { SignOut }  from "@phosphor-icons/react"
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export function Header() {
    const {count} = useContext(CartContext)
    return(
        <Container>
            <HomeButton>
            <span><a href="#">Sakura</a></span>
            </HomeButton>
            <Searchbar placeholder="Busque por pratos ou ingredientes"/>
            <AnimatedButton>
                <span>Itens no carrinho: {count}</span>
            </AnimatedButton>
            <LogOutButton>
            <SignOut size={32} weight="bold" /> 
            </LogOutButton>
        </Container>
    )
}
