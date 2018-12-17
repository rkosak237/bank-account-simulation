import * as React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,15],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
            'rgba(255,99,132,1)',
        ],
        borderWidth: 1
    }, {
        label: '123',
        data: [15, 10, 7, 1, 8, 10, 12],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};
class DesktopChart extends React.Component {




    render() {
        return (
            <div className="chart">
                <Line
                height={100}
                data={data}/>
            </div>
        )
    }
}

export default DesktopChart;