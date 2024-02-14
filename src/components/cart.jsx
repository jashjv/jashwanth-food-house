import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './itemList';
import { clearCart, removeItem } from '../utils/cartSlice';
import styled from 'styled-components';


const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.item);
    console.log(cartItems,'bbbb')

    const dispatch= useDispatch();

    const handleClear = () => {
        dispatch(clearCart())
    }

    const removeItemfromcart = (item) => {
        dispatch(removeItem(item))
    }

  return (
    <>
    <button onClick={handleClear}>
    clear all things from cart cart
</button>

    <ItemWrap>
         
            {
               cartItems.map((elm) => (
                    <>
                        <InnerItemWrap>

                            <span>
                                {elm.card.info.name}-
                                &#x20B9; {elm.card.info.price}

                            </span> -
                            <div>
                            <button onClick={()=>removeItemfromcart(elm)}>
    clear item
</button>
                               
                            </div>
                            <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + elm.card.info.imageId} />

                        </InnerItemWrap>
                        <div style={{ fontSize: '20px' }}>
                            <p>
                                {elm.card.info.description}
                            </p>
                        </div>

                    </>

                ))


            }

        </ItemWrap>
        </>
    )
}

export default Cart;

const ItemWrap = styled.div`
    width: 50%;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */


`
const InnerItemWrap = styled.div`
border-bottom:1px solid grey;
display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 19px;
    margin: 6px;
    font-weight: 500;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;


img{
    width: 40%;
}
    
`


