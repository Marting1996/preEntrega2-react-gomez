import React from 'react';

const CartWidget = ({cantCarrito}) => {
    return (
        <div className='carroIco'>
             <p className='carroIco'>🛒</p>
             <p className='carroNotificacion'>{cantCarrito}</p>
        </div>
    );
}

export default CartWidget;
