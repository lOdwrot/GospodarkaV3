import React, {useState, useEffect} from 'react'
import { Skeleton, Button, Input, Form, Select  } from 'antd';
import axios from "axios"

const Option = Select.Option
const FormItem = Form.Item

const fields = [
    {
        label: 'Name',
        apiName: 'name',
    },
    {
        label: 'Location',
        apiName: 'location',
    },
]

export default ({
    isEditMode=false,
    buildingId=null,
    saveCallBack
}) => {
    const [buildingDetails, setBuildingDetails] = useState(null)
    const [editedBuildingDetails, setEditedBuildingDetails] = useState(null)
    const [saveRequired, setSaveRequired] = useState(false)
    const [availableManagers, setAvailableManagers] = useState([
        {name: 'Bogdan', surname: 'Kowalski', id: '6'}
    ])

    const fetchBuildingDetails = async () => {
        const resp = await axios.get('/project')
  
        setEditedBuildingDetails(resp.data)
        setBuildingDetails(resp.data)
    }


    const fetchavailableManagers = async () => {
        const resp = await axios.get('/user')
        setAvailableManagers(resp.data.filter(v => v.role === 'manager' ))
    }



    useEffect(() => {
        if(!buildingId) {
            setEditedBuildingDetails({})
            setBuildingDetails({})
            fetchavailableManagers()
        } else {
            fetchBuildingDetails()
            fetchavailableManagers()
        }
    }, [])

    return (
        <>
            {
                !buildingDetails &&
                <Skeleton active />
            }
            {
                buildingDetails &&
                <div className={'tab-container'}>
                    <div
                        className={'image-container'}
                        style={{backgroundImage: `url(${buildingDetails.imageURL})`}}
                    />
                    {
                        isEditMode &&
                        <FormItem help={'Project Image URL'}>
                            <Input
                                value={editedBuildingDetails['imageURL'] || ''}
                                onChange={(e) => {
                                    setSaveRequired(true)
                                    setEditedBuildingDetails({...editedBuildingDetails, imageURL: e.target.value})
                                }}
                                placeholder={'Project Image URL'}
                            />
                        </FormItem>
                    }
                    {
                        fields.map((v, index) => (
                            <FormItem key={index} help={v.label}>
                                <Input
                                    value={editedBuildingDetails[v.apiName] || ''}
                                    onChange={(e) => {
                                        setSaveRequired(true)
                                        setEditedBuildingDetails({...editedBuildingDetails, [v.apiName]: e.target.name})
                                    }}
                                    placeholder={v.label}
                                    disabled={!isEditMode}
                                />
                            </FormItem>
                        ))
                    }
                    <FormItem help={'Manager'}>
                        <Select 
                            disabled={!isEditMode}
                            style={{ width: 150 }} 
                            value={editedBuildingDetails.managerId}
                            onChange={(val) => setEditedBuildingDetails({...editedBuildingDetails, managerId: val})}>
                            {availableManagers.map(v => <Option key={v.id} value={v.id}>{`${v.name} ${v.surname}`}</Option>)}
                        </Select>
                    </FormItem>
                    {
                        isEditMode &&
                        <div>
                            <Button onClick={() => {
                                setEditedBuildingDetails(buildingDetails)
                                setSaveRequired(false)
                                saveCallBack && saveCallBack(editedBuildingDetails)
                            }}>Cancel</Button>
                            <Button disabled={!saveRequired}>Save</Button>
                        </div>
                    }
                </div>
            }
        </>
    )
}
