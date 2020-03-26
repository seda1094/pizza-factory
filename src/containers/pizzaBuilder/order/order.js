import React from 'react';
const Order = ({totalPrice}) => {
    return (
        <div className="order_block_price">
            <div>
                <p><span className="boldPrice">Price:</span><span className="price">{totalPrice}</span></p>
                <button>order</button>
            </div>
        </div>
    );
}

export default Order;