import React from 'react'
import WorkerAssignment from '../components/WorkersAssignment/WorkerAssignment';
import MachinesAssignment from '../components/MachinesAssignment/MachinesAssignment';
import BuildingDetails from '../components/BuildingDetails/BuildingDetails';

export default () => {
    return (
        <div style={{display: 'flex'}}>
            <WorkerAssignment/>
            <MachinesAssignment/>
            <BuildingDetails/>
        </div>
    )
}