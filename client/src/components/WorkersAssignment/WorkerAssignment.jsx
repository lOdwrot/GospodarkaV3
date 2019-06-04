import React, {useState, useEffect} from 'react'
import { List, Skeleton, Button } from 'antd';
import AddModal from '../HelperComponents/AddModal';

export default () => {
    const [asignedWorkers, setAssignedWorkers] = useState(null)
    const [availableWorkes, setAvailableWorkers] = useState([
        {name: 'Adam', surname: 'Bogdański'},
        {name: 'Adam', surname: 'Zalewski'},
    ])

    const fetchWorkers = () => new Promise((resolve) => setTimeout(() => resolve(
        [
            {name: 'Bogdan', surname: 'Kowalski'},
            {name: 'Zbigniew', surname: 'Walaszek'}
        ]
    ), 1000)).then(setAssignedWorkers)

    const removeWorker = (worker) => setAssignedWorkers(asignedWorkers.filter(v => v !== worker))
    
    useEffect(() => {
        fetchWorkers()
    }, [])

    return (
        <>
            {
                !asignedWorkers &&
                <Skeleton active />
            }
            {
                asignedWorkers &&
                <div style={{maxWidth: '400px', minWidth: '300px'}}>
                    <List
                        header={<div>Asigned Workers</div>}
                        bordered
                        dataSource={asignedWorkers}
                        renderItem={item => (
                            <List.Item>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                    <div>{`${item.name} ${item.surname}`}</div>
                                    <Button shape="circle" icon="delete" onClick={() => removeWorker(item)}/>
                                </div>
                            </List.Item>
                        )}
                    />
                    <AddModal
                        data={availableWorkes}
                        usedProperties={['name', 'surname']}
                        apply={(data) => setAssignedWorkers([...asignedWorkers, ...data])}
                    />
                </div>
            }
        </>
    )
}
