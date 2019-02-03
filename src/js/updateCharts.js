export const updateChartsFac = () => {

    return {
        doughnutChart: (dataFromAPI, array) => {

        //add new labels
            const sum = (a, b) => {
                return a + b;
            };
            //add income
            const income = dataFromAPI.map(money =>
            money.status == "income" ? money.amount : 0
            );

            //Sum up all income
            const incomeSum = income.reduce(sum, 0);

            //add outcome
            const outcome = dataFromAPI.map(money =>
            money.status == "outcome" ? -money.amount : 0
            );

            //Sum up all outcome
            const outcomeSum = outcome.reduce(sum, 0);
            console.log("doughnutChart");

            //update
            array.datasets[0].data = [];
            array.datasets[0].data.push(incomeSum, outcomeSum);
      },


      lineChart: (dataFromAPI, array) => {

        //line chart
            //add new labels
            const groupOfLabels = dataFromAPI.map(item => item.date);
            const numberOfLabels = groupOfLabels;
            array.labels = numberOfLabels.filter(item => item < `2017-01-20`);

            //add income
            const income = dataFromAPI.map(money =>
            money.status == "income" ? money.amount : 0
            );

            //add outcome
            const outcome = dataFromAPI.map(money =>
            money.status == "outcome" ? -money.amount : 0
            );
            //update

            array.datasets[0].data = income;
            array.datasets[1].data = outcome;
      } };
}