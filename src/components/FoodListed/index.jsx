import React from "react";
import { Cards } from "../Cards";
import { Container } from "./styles"; // Estilo opcional

export function FoodList() {
    const foodItems = [
        { name: "Lasanha de Frango", description: "Massa fresca com frango e molho branco" },
        { name: "Risoto de Camarão", description: "Arroz arbóreo com camarões frescos" },
        { name: "Pizza Margherita", description: "Pizza com molho de tomate, mussarela e manjericão" }
    ];

    return (
        <Container>
            {foodItems.map((item, index) => (
                <Cards 
                    key={index} 
                    name={item.name} 
                    description={item.description} 
                />
            ))}
        </Container>
    );
}
