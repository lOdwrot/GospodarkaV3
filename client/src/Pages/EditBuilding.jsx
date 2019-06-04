import React from 'react'
import BuildingDetails from '../components/BuildingDetails/BuildingDetails';

export default (props) => {
    console.log('Props', props)

    return (
        <BuildingDetails
            isEditMode={true}
            buildingId={props.match.params.id}
        />
    )
}