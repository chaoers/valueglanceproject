import { useState, useEffect } from 'react';
import { filterData } from '../utils/filters';

export const useFilteredData = (data, initialFilters) => {
    const [filters, setFilters] = useState(initialFilters);
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(filterData(data, filters));
    }, [data, filters]);

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({ ...prev, [filterName]: value }));
    };

    return { filteredData, filters, handleFilterChange };
};