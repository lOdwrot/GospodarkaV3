import React from 'react'
import PersonalData from '../components/PersonalData/PersonalDataContainer'
import Meals from '../components/Meals/Meals'
import Agreements from '../components/Agreements/AgreementsContainer';
import styles from './Pages.module.scss'

export default () => {
    return (
        (
            <div id="container">
                <div className="topheader">
                    Worker Panel
                </div>
                <div className="bu-list">
                    <div style={{display: 'flex'}}>
                            <div style={{display: 'flex'}}>
                                <PersonalData/>
                                <div className="placed-flex">
                                    <Meals/>
                                    <Agreements/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    )
}