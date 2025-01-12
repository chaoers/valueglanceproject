import React from 'react';

const YearRangeFilter = ({ yearRange, onChange }) => (
    <div className="space-y-2">
        <label className="block font-medium">Year Range</label>
        <div className="flex space-x-2">
            <input
                type="number"
                value={yearRange.start}
                onChange={(e) => onChange({ ...yearRange, start: parseInt(e.target.value) })}
                className="w-full p-2 border rounded"
                min="2000"
                max="2024"
            />
            <input
                type="number"
                value={yearRange.end}
                onChange={(e) => onChange({ ...yearRange, end: parseInt(e.target.value) })}
                className="w-full p-2 border rounded"
                min="2000"
                max="2024"
            />
        </div>
    </div>
);

export default YearRangeFilter;
