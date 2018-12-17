//selectors

export default (expenses, { description, category, amount, status, currency }) => {
    return expenses.filter(expense => {

        console.log(expense);
        if(category  == 'Show all') {
            return category = '';
        } else {
            const statusMatch = expense.status.includes(status.toLowerCase());
            const descriptionMatch = expense.description.includes(description);
            const categoryMatch = expense.category.includes(category);
            const amountMatch = typeof amount !== 'number' || expense.amount == amount;

            return statusMatch && descriptionMatch && categoryMatch && amountMatch;
        }

    });
}