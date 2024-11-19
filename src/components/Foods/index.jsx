import React, { useState } from 'react';
import { Container } from '../Header/styles';


export function Foods({ price }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <Container>
    <div className="food-item">
    
      <span>R$ {price !== undefined ? price.toFixed(2) : '10.00'}</span> {/* Default to 0.00 if price is undefined */}
      <div className="quantity-control">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
        
      </div>
      
    </div>
    </Container>
  );
}