export const filterData = (data, filters) => {
    const { yearRange, revenueRange, netIncomeRange } = filters;

    return data.filter(item => {
        const year = parseInt(item.date.split('-')[0]);
        const meetsYearCriteria = year >= yearRange.start && year <= yearRange.end;

        const meetsRevenueCriteria = (!revenueRange.min || item.revenue >= parseFloat(revenueRange.min)) &&
            (!revenueRange.max || item.revenue <= parseFloat(revenueRange.max));

        const meetsIncomeCriteria = (!netIncomeRange.min || item.netIncome >= parseFloat(netIncomeRange.min)) &&
            (!netIncomeRange.max || item.netIncome <= parseFloat(netIncomeRange.max));

        return meetsYearCriteria && meetsRevenueCriteria && meetsIncomeCriteria;
    });
};