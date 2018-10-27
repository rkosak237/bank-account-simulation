import * as React from 'react';
import SingleProduct from './SingleProduct';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/fetchActions';


class Products extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        isLoading: false
    }
}
    componentDidMount() {
        this.setState({isLoading: true});
        this.props.fetchProducts();
    }


    render() {
        const {isLoading} = this.state;
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

export default connect(mapStateToProps, { fetchProducts })(Products);