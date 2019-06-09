import React, { useState } from 'react'
import { Button, Modal} from 'antd'
import BuildingDetails from '../BuildingDetails/BuildingDetails';

export default ({projectId, isEditIcon=false}) => {
    const [isOpen, setOpen] = useState(false)

    const cloaseModal = () => setOpen(false)
    const openModal = () => setOpen(true)

    return (
        <>
            <Button onClick={openModal}>Create Building</Button>
            <Modal
                title="Create Building"
                visible={isOpen}
                onCancel={cloaseModal}
                footer={[]}
            >
                <div style={{display: 'flex'}}>
                    <BuildingDetails
                        isEditMode={true}
                        projectId={projectId}
                        saveCallBack={cloaseModal}
                    />
                </div>
            </Modal>
        </>
    )
}