import React, { useState, useEffect } from 'react'
import { Skeleton, Table, Input, InputNumber, Button } from 'antd';


export default () => {
    const [inventory, setInventory] = useState(null) 
    const [editedItems, setEditedItems] = useState([])

    const replaceItemProperty = (id, property, value) => {
        const itemIndex = inventory.findIndex(v => v.id === id)
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
                disabled={row.id && !editedItems.includes(row.id)}
                value={value}
                onChange={(e) => replaceItemProperty(row.id, 'name', e.target.value)}
            />
        )
      }, {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
        render: (value, row, index) => (
            <InputNumber
                disabled={row.id && !editedItems.includes(row.id)}
                value={value}
                onChange={(v) => replaceItemProperty(row.id, 'quantity', v)}
            />
        )
    }, {
        title: 'Actions',
        dataIndex: 'id',
        key: 'id',
        render: (value, row, index) => (!row.id || editedItems.includes(row.id))
            ? <Button icon='save' onClick={() => {
                setEditedItems(editedItems.filter(v => v !== value))
            }}/>
            : <Button icon='edit' onClick={() => setEditedItems([...editedItems, value])}/>
    }]

    const fetchInventory = () => new Promise((resolve) => setTimeout(() => resolve(
        [
            {name: 'Koparka', quantity: 3, id: '1'},
            {name: 'Dzwig', quantity: 1, id: '2'},
            {name: 'Walec', quantity: 3, id: '3'},
        ]
    ), 1000)).then(setInventory)
    
    useEffect(() => {
        fetchInventory()
    }, [])

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
                disabled={inventory.some(v => !v.id)}
            />
        </div>
    )
}