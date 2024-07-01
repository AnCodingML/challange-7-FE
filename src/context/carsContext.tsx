// CarContext.js

import { createContext, useState,useContext  } from 'react';
import axios from '../lib/axios';
import {jwtDecode} from 'jwt-decode';
import Swal from 'sweetalert2';

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
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: '',
        avatar: '',
        token: ''
    })

    const fetchCars = async (filters:any) => {
        setLoading(true);
        setError(null);
        const bearer = localStorage.getItem('users');
        if (bearer) {
            const user = JSON.parse(bearer);
            setUser(user);
        
            const token = user.token;
            const decodedToken = jwtDecode(token);
            
            const currentTime = Date.now() / 1000;
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('users');
                Swal.fire({
                    title: "Session Expired",
                    text: "Your session has expired. Please login again.",
                    icon: "warning"
                }).then(() => {
                    window.location.replace('/cms/admin-login'); //refresh untuk membaca ulang session storage
                })
            }
        }
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
        <CarContext.Provider value={{ cars, fetchCars, loading, error, user }}>
            { children }
        </CarContext.Provider>
    );
};

