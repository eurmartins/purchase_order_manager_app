import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to Home Page</h1>
        </div>
    );
};

export default Home;