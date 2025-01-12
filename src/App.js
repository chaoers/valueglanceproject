import React, { useState, useMemo } from 'react';
import FinancialTable from './components/FinancialTable';
import Filters from './components/Filters';
import { useFinancialData } from './hooks/useFinancialData';
import { useFilteredData } from './hooks/useFilteredData';

const INITIAL_FILTERS = {
    yearRange: { start: 2020, end: 2024 },
    revenueRange: { min: '', max: '' },
    netIncomeRange: { min: '', max: '' }
};

const App = () => {
    const { data, loading, error } = useFinancialData();
    const { filteredData, filters, handleFilterChange } = useFilteredData(data, INITIAL_FILTERS);
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });

    // Use useMemo to prevent unnecessary re-sorting
    const sortedData = useMemo(() => {
        const sorted = [...filteredData].sort((a, b) => {
            if (sortConfig.direction === 'asc') {
                return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
            }
            return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
        });
        return sorted;
    }, [filteredData, sortConfig.key, sortConfig.direction]);

    const handleSort = (key) => {
        setSortConfig(current => ({
            key,
            direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Apple Inc. Financial Data</h1>
            <Filters filters={filters} onFilterChange={handleFilterChange} />
            <FinancialTable
                data={sortedData}
                onSort={handleSort}
                sortConfig={sortConfig}
            />
        </div>
    );
};

export default App;