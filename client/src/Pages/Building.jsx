import React from 'react'
import WorkerAssignment from '../components/WorkersAssignment/WorkerAssignment';
import MachinesAssignment from '../components/MachinesAssignment/MachinesAssignment';
import BuildingDetails from '../components/BuildingDetails/BuildingDetails';

export default (props) => {
    const projectId = props.match.params.id;
    return (
        <div style={{display: 'flex'}}>
            <WorkerAssignment projectId={projectId}/>
            <MachinesAssignment projectId={projectId}/>
            <BuildingDetails projectId={projectId}/>
        </div>
    )
}