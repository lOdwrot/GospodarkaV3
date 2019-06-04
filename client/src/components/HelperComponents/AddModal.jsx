import React, {useState} from 'react'
import { Modal, Checkbox, Button } from 'antd';
import { List } from 'antd';

export default ({
    data,
    usedProperties,
    apply
}) => {
    const [selectedItems, setSelectedItems] = useState([])
    const [isOpen, setOpen] = useState(false)
    
    const itemClick = (item) => setSelectedItems(selectedItems.find(v => v === item) 
                                                    ? selectedItems.filter(v => v !== item)
                                                    : [...selectedItems, item]
                                                )
    const openModal = () => {
        setSelectedItems([])
        setOpen(true)
    }

    const cloaseModal = () => {
        setSelectedItems([])
        setOpen(false)
    }

    return (
        <>
            <Button style={{width: '100%'}} onClick={openModal} icon='plus'/>
            <Modal
                title="Select Items To Add"
                visible={isOpen}
                onCancel={cloaseModal}
                footer={[
                    <Button 
                        key="Add" 
                        disabled={selectedItems.length === 0}
                        onClick={() => {
                            apply(selectedItems)
                            cloaseModal()
                        }}>
                        Add
                    </Button>,
                ]}
            >
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Checkbox 
                                checked={selectedItems.includes(item)}
                                onChange={() => itemClick(item)}
                            >
                                {usedProperties.reduce((acc, v) => (acc + item[v] + ' '), '')}
                            </Checkbox>
                        </List.Item>
                    )}
                />
            </Modal>
        </>
    )
}