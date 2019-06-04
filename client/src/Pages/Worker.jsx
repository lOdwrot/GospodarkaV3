import React from 'react'
import PersonalData from '../components/PersonalData/PersonalDataContainer'
import Meals from '../components/Meals/MealsContainer'
import Agreements from '../components/Agreements/AgreementsContainer';

export default () => {
    return (
        (
            <div style={{display: 'flex'}}>
                <div style={{display: 'flex'}}>
                    <PersonalData/>
                    <div>
                        <Meals/>
                        <Agreements/>
                    </div>
                </div>
            </div>
        )
    )
}