import React from 'react';
import RangeFilter from './RangeFilter';
import YearRangeFilter from './YearRangeFilter';

const Filters = ({ filters, onFilterChange }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <YearRangeFilter
                yearRange={filters.yearRange}
                onChange={(yearRange) => onFilterChange('yearRange', yearRange)}
            />
            <RangeFilter
                label="Revenue Range (USD)"
                value={filters.revenueRange}
                onChange={(range) => onFilterChange('revenueRange', range)}
            />
            <RangeFilter
                label="Net Income Range (USD)"
                value={filters.netIncomeRange}
                onChange={(range) => onFilterChange('netIncomeRange', range)}
            />
    </div>
);

export default Filters;