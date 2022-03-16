import React from "react";
import Card from "../../Components/Molecules/Card/Card";
import styles from './Dashboard.module.css';
// import exclamationMark from '../../images/exclamation.svg';

const Dashboard = () => {
    return (
        <div className={styles.main}>
            Hello from the Dashboard
            <Card>
                <p>TESTING MY JOY</p>
            </Card>
        </div>

    )
}
export default Dashboard;