import React, {useState, useEffect} from 'react'
import { Skeleton, Table, Button } from 'antd';
import WorkerEdition from './WorkerEdition';
import axios from 'axios';

export default () => {
    const [workers, setWorkers] = useState(null)
    const [editedWorker, setEditedWorker] = useState(null)

    const fetchWorkers = async () => {
        const resp = await axios.get('/user')
        setWorkers(resp.data.filter(v => v.role === 'worker' || v.role === 'manager' ))
    }

    const deleteWorker = async (workerId) => {
        const result = await axios.delete('/user', {
            data: {userId: workerId}
        })
        setWorkers(workers.filter(v => v._id !== workerId))
    }

    const updateWorker = async (data) => {
        const result = await axios.put('/user', data )
        fetchWorkers()
    }

    const addWorker = async (data) => {
        const result = await axios.post('/user', data)
        fetchWorkers()
    }
    
    
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name > b.name ? 1 : -1,
        sortDirections: ['descend', 'ascend'],
      }, {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
        sorter: (a, b) => a.surname > b.surname ? 1 : -1,
        sortDirections: ['descend', 'ascend'],
    }, {
        title: 'Mail',
        dataIndex: 'mail',
        key: 'mail',
        sorter: (a, b) => a.surname > b.surname ? 1 : -1,
        sortDirections: ['descend', 'ascend'],
    }, {
        title: 'Actions',
        dataIndex: '_id',
        key: '_id',
        render: (value, row, index) => (
            <div>
                <Button icon='edit' onClick={() => setEditedWorker(row)}/>
                <Button icon='delete' onClick={() => deleteWorker(value)}/>
            </div>
        )
    }]

    useEffect(() => {
        fetchWorkers()
    }, [])

    const saveWorker = (worker) => {
        if(editedWorker._id) {
            const nextWorkers = [...workers]
            nextWorkers[nextWorkers.findIndex(v => v._id === editedWorker._id)] = worker
            updateWorker(worker)
            setWorkers(nextWorkers)
        } else {
            addWorker(worker)
            setWorkers([...workers, worker])
        }
        setEditedWorker(null)
    }

    if(!workers) return <Skeleton/>

    return (
        <div style={{maxHeight: '500px', overflowY: 'auto'}}>
            {
                editedWorker &&
                <WorkerEdition
                    templateWorker={editedWorker}
                    cancel={() => setEditedWorker(null)}
                    save={saveWorker}
                />
            }
            <Table 
                pagination={false}
                columns={columns} 
                dataSource={workers}
            />
            <Button 
                onClick={() => setEditedWorker({})}
                icon='plus' 
                style={{width: '100%'}}
            />
        </div>
    )
}