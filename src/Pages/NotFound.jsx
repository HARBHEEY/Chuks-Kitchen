import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
    // Redirect to home page after 4 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 4000);
        return () => clearTimeout(timer);
    },[]);
  return (
    <div>
      <div>
            <h1>404: Not found page</h1>
            <p>Redirecting to the home page........</p>
        </div>
    </div>
  )
}

export default NotFound