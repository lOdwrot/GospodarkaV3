import React, {useState, useEffect} from 'react'
import { List, Skeleton, Button } from 'antd';
import AddModal from '../HelperComponents/AddModal';
import axios from "axios"

export default ({projectId}) => {
    const [asignedWorkers, setAssignedWorkers] = useState(null)
    const [availableWorkes, setAvailableWorkers] = useState([
        {name: 'Adam', surname: 'Bogdański'},
        {name: 'Adam', surname: 'Zalewski'},
    ])

    const fetchWorkers = () => axios.get('/user').then(resp=>{
        const allWorkers = resp.data
                                .filter(v=>v.role == "worker")
                                .sort((a,b)=>a.surname < b.surname ? 1 : -1)
        setAvailableWorkers(allWorkers.filter(v=> v.projectId == null ))
        setAssignedWorkers(allWorkers.filter(v=>v.projectId == projectId))

    })


    const removeWorker = (worker) => {
        axios.put(
            "/user/assign",
            {userId:worker._id, projectId:null}
        ).then(resp=>fetchWorkers())
    }
    
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
                    <div className="building-flex">
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
                        apply={(data) => {
                            Promise.all(
                                data.map(v=>axios.put(
                                    "/user/assign",
                                    {userId:v._id, projectId}
                                ))
                            ).then(fetchWorkers)
                        }}
                    />
                </div>
                </div>
            }
        </>
    )
}
