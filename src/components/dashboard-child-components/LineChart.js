import * as React from 'react';
import { connect } from "react-redux";
import { Line } from 'react-chartjs-2';
import { fetchHistory } from "../../actions/fetchActions";
import { updateChartsFac } from "../../js/updateCharts";


const data = {
    labels: [],
    datasets: [{
        label: 'Month income',
        data: [],
        backgroundColor:
            'rgb(39, 174, 96)',
        strokeColor:'rgb(26, 188, 156)',
        borderWidth: 1
    },
        {
        label: 'Month outcome',
        data: [],
        backgroundColor:
            'rgb(241, 196, 15)',
        strokeColor:'rgb(241, 196, 15)',
        borderWidth: 1
    }]
};

class LineChart extends React.Component {


    componentDidMount() {
        this.props.fetchHistory();
    }

    render() {

        const update = updateChartsFac();
        update.lineChart(this.props.fetchItems, data);

        return (
            <div className="chart">
                <Line
                height={100}
                data={data}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  fetchItems: state.fetchItems.itemsHistory
});

export default connect(mapStateToProps, { fetchHistory })(LineChart);
