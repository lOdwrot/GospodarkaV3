import React, { useState } from 'react'
import { Button, Modal} from 'antd'
import BuildingDetails from '../BuildingDetails/BuildingDetails';

export default ({projectId, isEditIcon=false, fetchBuildings}) => {
    const [isOpen, setOpen] = useState(false)
    
    const cloaseModal = () => {
        setOpen(false)
        fetchBuildings()
    }
    const openModal = () => setOpen(true)

    return (
        <>
            <Button id="create-building" onClick={openModal}>Create Building</Button>
            <Modal
                title="Create Building"
                visible={isOpen}
                onCancel={cloaseModal}
                footer={[]}
            >
                <div style={{display: 'flex'}}>
                    <BuildingDetails
                        isPopUp={true}
                        isEditMode={true}
                        projectId={projectId}
                        saveCallBack={cloaseModal}
                    />
                </div>
            </Modal>
        </>
    )
}