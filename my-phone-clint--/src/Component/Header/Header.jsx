import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <Link to="/phones"> Phones </Link>
           <Link to ="/mobile"> Mobile </Link>
        </div>
    );
};

export default Header;