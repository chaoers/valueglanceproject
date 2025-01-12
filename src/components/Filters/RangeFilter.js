import React from 'react';

const RangeFilter = ({ label, value, onChange }) => (
    <div className="space-y-2">
        <label className="block font-medium">{label}</label>
        <div className="flex space-x-2">
            <input
                type="number"
                value={value.min}
                onChange={(e) => onChange({ ...value, min: e.target.value })}
                className="w-full p-2 border rounded"
                placeholder="Min"
            />
            <input
                type="number"
                value={value.max}
                onChange={(e) => onChange({ ...value, max: e.target.value })}
                className="w-full p-2 border rounded"
                placeholder="Max"
            />
        </div>
    </div>
);

export default RangeFilter;