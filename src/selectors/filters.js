//selectors

export default (expenses, { description, category, amount, status }) => {
    return expenses.filter(expense => {
        const statusMatch = expense.status.includes(status);
        const descriptionMatch = expense.description.includes(description);
        const categoryMatch = expense.category.includes(category);
        const amountMatch = typeof amount !== 'number' || expense.amount == amount;

        return statusMatch && descriptionMatch && categoryMatch && amountMatch;
    });
}