import { useState, useEffect } from 'react';
import { fetchFinancialData } from '../services/api';

export const useFinancialData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchFinancialData();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { data, loading, error };
};