import React from 'react'
import BuildingsManagment from '../components/BuildingsManagment/BuildingsManagment';
export default () => {
    return (
        <div>
            <BuildingsManagment
                enableBuildingCreation={true}
                enableBuildingEdition={true}
            />
        </div>
    )
}