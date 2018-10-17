import * as React from 'react';

const SingleProduct = ({type, amount, currency}) => {

    return(
        <div className="products__single-product">
            <img className="single-product_icon"/>
            <div className="single-product__description">
                <p className="single-product__description__text">{type}</p>
                <p className="single-product__description__text">{amount} {currency}</p>
            </div>
        </div>
    )
}
export default SingleProduct;