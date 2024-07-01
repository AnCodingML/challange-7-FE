// CarContext.js

import { createContext, useState,useContext  } from 'react';
import axios from '../lib/axios';

// Create the context
export const CarContext = createContext(null);

export const useCars = () => {
    const context = useContext(CarContext);
    if (context === undefined) {
      throw new Error('useCars must be used within a CarProvider');
    }
    return context;
  };

// Create the provider component
export default function CarProvider ({ children }) {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCars = async (filters:any) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('/cars', { params: filters });
            setCars(response.data.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CarContext.Provider value={{ cars, fetchCars, loading, error }}>
            { children }
        </CarContext.Provider>
    );
};

