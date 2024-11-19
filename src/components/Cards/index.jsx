import { Container } from "./styles";
import { useContext, useState, useReducer } from "react";
import { CartContext } from "../../contexts/CartContext";


export function Cards({ id, name, description, price }){
    const { items, setItems } = useContext(CartContext)
    
    const [quantity, setQuantity] = useState(1)

    function Reducer(state, action){
        switch(action.type){
            case "increment":
                return{count: state.count +1};
            case "decrement":
                return{ count: state.count > 1 ? state.count -1 : 1 };
            default : state
        }
        
    }


    const handleAddToCart = () => {
        const newItem = {
            id,
            name,
            price,
            quantity
        }


        setItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === id)
            if(existingItem){
                //aqui vai atualizar a quantidade do item que já está no carrinho
                return prevItems.map(item =>
                    item.id === id
                        ?{ ...item, quantity: item.quantity + quantity }
                        : item
                )
            } else {
                //Aqui vai adicionar um novo item no carrinho
                return[...prevItems, newItem]
            }
        })

    }

    return(
        <Container>
            <img src= "/food1.png" />
            <span>{name}</span>
            <h4>{description}</h4>
            <p>R${price !== undefined ? price.toFixed(2) : '10.00'}</p>
            
            <div>
            <button onClick={() => setQuantity(quantity > 1 ? quantity -1 : 1)}>-</button>
                <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart}>Incluir</button>
        </Container>
    )
}