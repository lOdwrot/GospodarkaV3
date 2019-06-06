import React from 'react'
import PersonalData from '../components/PersonalData/PersonalDataContainer'
import Meals from '../components/Meals/Meals'
import Agreements from '../components/Agreements/AgreementsContainer';
import styles from './Pages.module.scss'

export default () => {
    return (
        (
            <div className={styles['worker']}>
                <div className={styles['user-info']}>
                    <PersonalData/>
                </div>
                <div>
                    <Meals/>
                    <Agreements/>
                </div>
            </div>
        )
    )
}