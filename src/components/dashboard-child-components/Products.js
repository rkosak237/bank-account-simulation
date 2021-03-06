import * as React from 'react';
import SingleProduct from './SingleProduct';
import uuid from 'uuid';
import { connect } from 'react-redux';


class Products extends React.Component {
constructor(props) {
    super(props);
    this.state = {}
}
    render() {
        const products = this.props.fetchItems;
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
const mapStateToProps = state => ({
    fetchItems: state.fetchItems.itemsProducts
})

export default connect(mapStateToProps)(Products);