import React, { useState, useEffect } from 'react'
import { Skeleton, Table, Input, InputNumber, Button } from 'antd';
import axios from "axios"

export default () => {
    const [inventory, setInventory] = useState(null) 
    const [editedItems, setEditedItems] = useState([])

    const fetchInventory = () => axios.get('/equipment').then(resp=>{
        const allInventory = resp.data
                                .sort((a,b)=>a.name < b.name ? 1 : -1)
         setInventory(allInventory)
    })

    useEffect(() => {
        fetchInventory()
    }, [])

    const addInventory = (inventory) =>
        axios.post(
            "/equipment",
            {...inventory, projectId:null}
        ).then(resp=>fetchInventory())
    

    const updateInventory = (inventory) =>
        axios.put(
            "/equipment",
            inventory
        ).then(resp=>fetchInventory())
    

    const replaceItemProperty = (id, property, value) => {
        const itemIndex = inventory.findIndex(v => v._id === id)
        const nextInventory = [...inventory]
        nextInventory[itemIndex] = {...nextInventory[itemIndex], [property]: value}
        setInventory(nextInventory)
    }

    const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name > b.name ? 1 : -1,
        sortDirections: ['descend', 'ascend'],
        render: (value, row, index) => (
            <Input
                disabled={row._id && !editedItems.includes(row._id)}
                value={value}
                onChange={(e) => replaceItemProperty(row._id, 'name', e.target.value)}
            />
        )
      }, {
        title: 'Actions',
        dataIndex: '_id',
        key: '_id',
        render: (value, row, index) => (!row._id || editedItems.includes(row._id))
            ? <Button icon='save' onClick={() => {
                const savePromise = !row._id 
                                    ? addInventory(row)
                                    :  updateInventory(row)
                
                savePromise.then(fetchInventory)
                setEditedItems(editedItems.filter(v => v != row._id ))
            }}/>
            : <Button icon='edit' onClick={() => setEditedItems([...editedItems, value])}/>
    }]

    if(!inventory) return <Skeleton/>

    return (
        <div>
            <Table 
                pagination={false}
                columns={columns} 
                dataSource={inventory}
            />
            <Button 
                icon='plus' 
                style={{width: '100%'}} 
                onClick={() => setInventory([...inventory, {}])}
                disabled={inventory.some(v => !v._id)}
            />
        </div>
    )
}