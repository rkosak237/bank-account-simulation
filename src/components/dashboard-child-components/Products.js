import * as React from 'react';
import SingleProduct from './SingleProduct';
import uuid from 'uuid';


class Products extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        products: [],
        isLoading: false
    }
}
    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchProducts();
    }

    fetchProducts = () => {
        const endpoint = 'https://efigence-camp.herokuapp.com/api/data/products';

        fetch(endpoint)
            .then(rawData => rawData.json())
            .then(data => this.setState(({
                products: [...data.content],
                isLoading: false
            }))
        );
    }

    render() {
        const {isLoading, products} = this.state;
        return (
            <section className="content__sidebar">
                <h3 className="sidebar__title">Products</h3>
                <div className="sidebar__products-grid">
                    {products.map(product =>
                        <SingleProduct
                        key={uuid()}
                        {...product}
                        />
                    )}
                </div>
            </section>
        )
    }
}


export default Products;