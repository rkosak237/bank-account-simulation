import * as React from 'react';
import { connect } from "react-redux";
import { Doughnut } from 'react-chartjs-2';
import { fetchHistory } from "../../actions/fetchActions";
import { updateChartsFac } from "../../js/updateCharts";


const data = {
    labels: ['Income', 'Outcome'],
    datasets: [{
        label: '',
        data: [],
        backgroundColor: [
            'rgb(39, 174, 96)',
            'rgb(241, 196, 15)'
        ],
        strokeColor: [
            'rgb(39, 174, 96)',
            'rgb(241, 196, 15)'
        ],
        borderWidth: 1
    }]
};

// const updateChart = (bills) => {
//     //add new labels

//     //add income
//     const income = bills.map(money => money.status == 'income' ? money.amount : 0);

//     const incomeSum = income.reduce((a, b) => a + b, 0);

//     //add outcome
//     const outcome = bills.map(money => money.status == 'outcome' ? -money.amount : 0);

//     //sum all
//     const outcomeSum = outcome.reduce((a, b) => a + b, 0);

//     //update
//     data.datasets[0].data = [];
//     data.datasets[0].data.push(incomeSum, outcomeSum);
// }

class DoughnutChart extends React.Component {


    componentDidMount() {
        this.props.fetchHistory();
    }

    render() {
        const update = updateChartsFac();
        update.doughnutChart(this.props.fetchItems, data);

        return (
            <div className="chart">
                <Doughnut
                height={100}
                data={data}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  fetchItems: state.fetchItems.itemsHistory
});

export default connect(mapStateToProps, { fetchHistory })(DoughnutChart);
