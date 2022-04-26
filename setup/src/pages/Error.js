import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h2>Oops you reached the dead end</h2>
      <Link to='/' className='btn btn-primary'>
        Home
      </Link>
    </div>
  );
};

export default Error;
