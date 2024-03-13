import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && (
        <Link to="/login">
          <button className='bg-teal-700 text-white float-right mx-10 my-4 w-20 h-8 rounded-md'>
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
