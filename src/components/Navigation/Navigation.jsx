import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/jewelry">Jewelry</Link>
                        </li>
                        <li>
                            <Link to="/electronics">Electronics</Link>
                        </li>
                    </ul>
                </nav>

        </div>
    );
};


export default Navigation;