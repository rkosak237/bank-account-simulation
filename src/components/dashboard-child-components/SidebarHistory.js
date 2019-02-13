import * as React from 'react';
import ListElement from './ListElement';
import { connect } from 'react-redux';

class SidebarHistory extends React.Component {
constructor(props) {
    super(props);
    this.state = {}
}

    render() {
        const historyBills = this.props.fetchItems;
        const filtered = historyBills
        .map(item => item.category)
        .filter((item, index, array) => array.indexOf(item) === index);
        return (
            <section className="content__sidebar sidebarHistory">
                <h3 className="sidebar__title">History</h3>
                <div className="sidebarHistory__wrapper">
                    <ul className="sidebarHistory__list">
                        {historyBills.map(bill =>
                            <ListElement
                            key={bill.id}
                            array={filtered}
                            {...bill}
                        />)}
                    </ul>
                </div>
            </section>
        );
    }
};
const mapStateToProps = state => ({
    fetchItems: state.fetchItems.itemsHistory
});


export default connect(mapStateToProps)(SidebarHistory);







