import * as React from 'react';

const Products = () => {


    return (
        <section className="content__sidebar">
            <h3 className="sidebar__title">Products</h3>
            <div className="sidebar__products-grid">
                <div className="products__single-product">
                    <p>Wallets</p>
                    <p>500,00 PLN</p>
                </div>
                <div className="products__single-product">
                    <p>Deposits</p>
                    <p>10 000,00 PLN</p>
                </div>
                <div className="products__single-product">
                    <p>Accounts</p>
                    <p>7 200,00 PLN</p>
                </div>
                <div className="products__single-product">
                    <p>Funds</p>
                    <p>7 000,00 PLN</p>
                </div>
                <div className="products__single-product">
                    <p>Bank loans</p>
                    <p>-127 000,00 PLN</p>
                </div>
            </div>
        </section>
    )
}


export default Products;