import React, { createContext, useEffect, UseEffect, useReducer, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
    const [count, setCount] = useState();
    const [items, setItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem("cart");
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Erro ao analisar o JSON do carrinho:", error);
            return [];
        }
    });


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
        setCount(items.reduce((acc, item) => acc + item.quantity, 0)); // Soma todas as quantidades
    }, [items]);
    



    return (
        <CartContext.Provider value={{ count, setCount, items, setItems }}>
            {children}
        </CartContext.Provider>
    )
}

