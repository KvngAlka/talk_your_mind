import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import styles from '../../styles/Dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={`containerFlex ${styles.dashboard}`}>

        <div>
            <div className={`containerFlex ${styles.title_cont}`}>
                <h4>
                    Calls
                </h4>

                <RefreshIcon className={styles.icon}/>
            </div>
            <div className={styles.body_cont}>
                <h4>
                    Extension has not been assigned
                </h4>
            </div>

        </div>

        <div>
            <div className={`containerFlex ${styles.title_cont}`}>
            <h4>
                    Calender
                </h4>

                <RefreshIcon className={styles.icon}/>
            </div>

            <div className={styles.body_cont}>
                <h4>
                    There are no future event scheduled in the calender
                </h4>
            </div>

        </div>

    </div>
  )
}

export default Dashboard