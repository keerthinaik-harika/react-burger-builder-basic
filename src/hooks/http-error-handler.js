import { useState, useEffect } from 'react'

export default axios => {
    const [ error, setError ] = useState(null);

    const requestInterceptor = axios.interceptors.request.use(request => {
        setError(null);
        return request;
    });
    const responseInterceptor = axios.interceptors.response.use(response => response, err => {
        setError(err);
    });

    useEffect(() => {
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        }
    }, [requestInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
        setError(null);
    };

    return [ error, errorConfirmedHandler ]
}