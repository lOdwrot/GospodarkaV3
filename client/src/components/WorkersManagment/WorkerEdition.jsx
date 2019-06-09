import React, { useState } from 'react'
import { Button, Modal, Form, Input, Checkbox} from 'antd'

const FormItem = Form.Item

const fields = [
    {
        label: 'Name',
        apiName: 'name',
    },
    {
        label: 'Surname',
        apiName: 'surname',
    },
    {
        label: 'Phone Number',
        apiName: 'phone',
    },
    {
        label: 'Address',
        apiName: 'address',
    },
    {
        label: 'Grade',
        apiName: 'grade',
    },
    {
        label: 'Mail',
        apiName: 'mail',
    },
]

export default ({
    templateWorker,
    save,
    cancel
}) => {
    const [worker, setWorker] = useState({...templateWorker})

    return (
        <Modal
            title="Dane pracownika"
            visible={true}
            onCancel={cancel}
            footer={[
                <Button
                    onClick={() => save(worker)}
                    key='Save'>
                    Save
                </Button>
            ]}
        >
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <div className={'tab-container'}>
                    <div
                        className={'image-container'}
                        style={{backgroundImage: `url(${worker.imageURL})`}}
                    />
                    {
                        <FormItem help={'Image URL'}>
                            <Input
                                value={worker.imageURL}
                                onChange={(e) => setWorker({...worker, imageURL: e.target.value})} 
                                placeholder={'Image URL'}
                            />
                        </FormItem>
                    }
                    {
                        fields.map((v, index) => (
                            <FormItem key={index} help={v.label}>
                                <Input
                                    value={worker[v.apiName]}
                                    onChange={(e) => setWorker({...worker, [v.apiName]: e.target.value})} 
                                    placeholder={v.label}
                                />
                            </FormItem>
                        ))
                    }
                    <Checkbox 
                        checked={worker.isManager} 
                        onChange={() => setWorker({...worker, isManager: !worker.isManager})}
                    >
                        Manager
                    </Checkbox>
                </div>
            </div>
        </Modal>
    )
}