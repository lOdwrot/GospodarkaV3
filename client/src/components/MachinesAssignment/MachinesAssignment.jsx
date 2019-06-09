import React, {useState, useEffect} from 'react'
import { List, Skeleton, Button } from 'antd';
import AddModal from '../HelperComponents/AddModal';
import axios from "axios"

export default ({projectId="abc123"}) => {
    const [asignedMachines, setAssignedMachines] = useState(null)
    const [availableMachines, setAvailableMachines] = useState([
        {name: 'Walec'},
        {name: 'Dzwig'},
    ])

    const fetchMachines = () => axios.get('/equipment').then(resp=>{
        const allMachines = resp.data
                                .sort((a,b)=>a.name < b.name ? 1 : -1)
        setAvailableMachines(allMachines.filter(v=> v.projectId == null ))
        setAssignedMachines(allMachines.filter(v=>v.projectId == projectId))

    })

    const removeMachine = (machine) => {
        axios.put(
            "/equipment/assign",
            {equipmentId:machine._id, projectId:null}
        ).then(resp=>fetchMachines())
    }

    useEffect(() => {
        fetchMachines()
    }, [])

    return (
        <>
            {
                !asignedMachines &&
                <Skeleton active />
            }
            {
                asignedMachines &&
                <div style={{maxWidth: '400px', minWidth: '300px'}}>
                    <List
                        header={<div>Asigned Machines</div>}
                        bordered
                        dataSource={asignedMachines}
                        renderItem={item => (
                            <List.Item>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                    <div>{`${item.name}`}</div>
                                    <Button shape="circle" icon="delete" onClick={() => removeMachine(item)}/>
                                </div>
                            </List.Item>
                        )}
                    />
                    <AddModal
                        data={availableMachines}
                        usedProperties={['name']}
                        apply={(data) => {
                            Promise.all(
                                data.map(v=>axios.put(
                                    "/equipment/assign",
                                    {equipmentId:v._id, projectId}
                                ))
                            ).then(fetchMachines)
                        }}
                    />
                </div>
            }
        </>
    )
}
