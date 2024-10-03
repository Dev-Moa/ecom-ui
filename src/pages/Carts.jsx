import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Carts() {
  const dispatch = useDispatch();
  const carts = useSelector((state)=>state.cart.products)
  const productId = carts.map((cart)=>cart.productId)
  console.log(productId);
  
  return (
    <div>Carts
      <ul>
        {carts.map((cart,index)=>(
          <li key={index}>
            {cart.productId}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carts