import React, { useState } from 'react';
import { Container } from '../Header/styles';
import { ButtonInclude } from '../ButtonInclude';

export function Foods({ price }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <Container>
    <div className="food-item">
      <h3>Combinados</h3>
      <p>teste</p>
      <span>R$ {price !== undefined ? price.toFixed(2) : '1.00'}</span> {/* Default to 0.00 if price is undefined */}
      <div className="quantity-control">
        <button onClick={decreaseQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={increaseQuantity}>+</button>
        
      </div>
      <ButtonInclude title="Incluir"/>
    </div>
    </Container>
  );
}