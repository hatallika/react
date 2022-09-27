import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            404. Page not found. Go to <Link to={'/'}>Home</Link>
        </div>
    );
};

export default NotFoundPage;