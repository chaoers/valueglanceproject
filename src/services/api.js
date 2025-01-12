const API_KEY = 'IC376zyVEJCIMfDfeUi5ZyDiYKFJT6Nn';

export const fetchFinancialData = async () => {
    try {
        const response = await fetch(
            `https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Map API response to our required format
        return data.map(item => ({
            date: item.date,
            revenue: item.revenue,
            netIncome: item.netIncome,
            grossProfit: item.grossProfit,
            eps: item.eps,
            operatingIncome: item.operatingIncome
        }));
    } catch (error) {
        console.error('Error fetching financial data:', error);
        throw error;
    }
};