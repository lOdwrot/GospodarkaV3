import React, { useState } from 'react'
import { Button, Modal, Select, Form } from 'antd'

const Option = Select.Option;
const FormItem = Form.Item
const availableGrades = ['1', '2', '3', '4', '5']

export default () => {
    const [isOpen, setOpen] = useState(false)
    const [grade, setGrade] = useState(null)
    const [workerId, setWorkerId] = useState(null)
    const [availableWorkers, setAvailableWorkers] = useState([
        {name: 'Bogdan', surname: 'Kowalski', id: '1'},
        {name: 'Zbigniew', surname: 'Walaszek', id: '2'}
    ])


    const cloaseModal = () => setOpen(false)
    const openModal = () => setOpen(true)

    return (
        <>
            <Button onClick={openModal}>
                Grade User
            </Button>
            <Modal
                title="Select Items To Add"
                visible={isOpen}
                onCancel={cloaseModal}
                footer={[
                    <Button 
                        key="Save"
                        disabled={!grade || !workerId}
                        onClick={() => {
                            cloaseModal()
                        }}>
                        Save
                    </Button>,
                ]}
            >
                <div style={{display: 'flex'}}>
                    <FormItem help={'Worker'}>
                        <Select 
                            style={{ width: 250 }} 
                            value={workerId}
                            onChange={setWorkerId}>
                            {availableWorkers.map(v => <Option key={v.id} value={v.id}>{v.name + ' ' + v.surname}</Option>)}
                        </Select>
                    </FormItem>
                    <FormItem help={'Grade'}>
                        <Select 
                            style={{ width: 150 }} 
                            value={grade}
                            onChange={setGrade}>
                            {availableGrades.map(v => <Option key={v} value={v}>{v}</Option>)}
                        </Select>
                    </FormItem>
                </div>
            </Modal>
        </>
    )
}