import filter from '../../selectors/filters';


describe('Filter selector', () => {
    const data = [
        {
            id: "B48YL",
            date: "2017-01-01",
            description: "etiam aliquam aliquam",
            category: "Cash",
            currency: "PLN",
            amount: 238,
            status: "income"
        },
        {
            id: "BRVYo",
            date: "2017-01-02",
            description: "etiam sollicitudin pretium",
            category: "Gas",
            currency: "EUR",
            amount: 658,
            status: "income"
        },
        {
            id: "GgPmr",
            date: "2017-01-03",
            description: "ipsum facilisis ipsum",
            category: "Cash",
            currency: "PLN",
            amount: 380,
            status: "outcome"
        }
    ];

    //filter description
    it('filter description/type', () => {
        const test = {
            id: "",
            date: undefined,
            description: "etiam",
            category: "",
            currency: "",
            amount: undefined,
            status: ''
        };
        const result = filter(data, test);

        expect(result).toEqual([data[0], data[1]]);
    })

    //filter amount
    it('filter amount', () => {
        const test = {
            id: "",
            date: undefined,
            description: "",
            category: "",
            currency: "",
            amount: 380,
            status: ''
        };
        const result = filter(data, test);

        expect(result).toEqual([data[2]]);
    })


})