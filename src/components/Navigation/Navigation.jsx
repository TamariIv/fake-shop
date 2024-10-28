import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={styles.sidebar}>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/jewelry">Jewelry</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to="/electronics">Electronics</Link>
                        </li>
                    </ul>
                </nav>

        </div>
    );
};


export default Navigation;