import React, {useState, useEffect} from 'react'
import { List, Skeleton, Button } from 'antd';
import AddModal from '../HelperComponents/AddModal';

export default () => {
    const [asignedMachines, setAssignedMachines] = useState(null)
    const [availableMachines, setAvailableMachines] = useState([
        {name: 'Walec'},
        {name: 'Dzwig'},
    ])

    const fetchMachines = () => new Promise((resolve) => setTimeout(() => resolve(
        [
            {name: 'Koparka'},
            {name: 'Młot Pneumatyczny'},
        ]
    ), 1000)).then(setAssignedMachines)

    const removeWorker = (worker) => setAssignedMachines(asignedMachines.filter(v => v !== worker))
    
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
                                    <Button shape="circle" icon="delete" onClick={() => removeWorker(item)}/>
                                </div>
                            </List.Item>
                        )}
                    />
                    <AddModal
                        data={availableMachines}
                        usedProperties={['name']}
                        apply={(data) => setAssignedMachines([...asignedMachines, ...data])}
                    />
                </div>
            }
        </>
    )
}
