import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const err = useRouteError();

    return (
        <div className='error'>
            <h1>
                oops!
            </h1><h3>{err.status}</h3>
            <h2>{err.data}</h2>
            <img src='https://media1.giphy.com/media/C21GGDOpKT6Z4VuXyn/200w.gif' />

        </div>
  )
}

export default ErrorPage;