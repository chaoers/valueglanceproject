import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

const FinancialTable = ({ data, onSort, sortConfig }) => {
    const formatDate = (dateString) => dateString;

    return (
        <div className="overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                <tr className="bg-gray-100">
                    <th className="p-3 text-left border">
                        <button onClick={() => onSort('date')} className="flex items-center space-x-1">
                            <span>Date</span>
                            <ArrowUpDown className="w-4 h-4" />
                        </button>
                    </th>
                    <th className="p-3 text-left border">
                        <button onClick={() => onSort('revenue')} className="flex items-center space-x-1">
                            <span>Revenue</span>
                            <ArrowUpDown className="w-4 h-4" />
                        </button>
                    </th>
                    <th className="p-3 text-left border">
                        <button onClick={() => onSort('netIncome')} className="flex items-center space-x-1">
                            <span>Net Income</span>
                            <ArrowUpDown className="w-4 h-4" />
                        </button>
                    </th>
                    <th className="p-3 text-left border">Gross Profit</th>
                    <th className="p-3 text-left border">EPS</th>
                    <th className="p-3 text-left border">Operating Income</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.date} className="hover:bg-gray-50">
                        <td className="p-3 border">{formatDate(item.date)}</td>
                        <td className="p-3 border">{formatCurrency(item.revenue)}</td>
                        <td className="p-3 border">{formatCurrency(item.netIncome)}</td>
                        <td className="p-3 border">{formatCurrency(item.grossProfit)}</td>
                        <td className="p-3 border">${item.eps.toFixed(2)}</td>
                        <td className="p-3 border">{formatCurrency(item.operatingIncome)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FinancialTable;