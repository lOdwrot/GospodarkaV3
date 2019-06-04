import React, {useState, useEffect} from 'react'
import { Skeleton, Button, Input, Form, Select  } from 'antd';

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

    const fetchBuildingDetails = () => new Promise((resolve) => setTimeout(() => resolve(
        {
            name: 'Stadion',
            location: 'Wrocław ul. Uławska 17',
            imageURL: 'xxx'
        }
    ), 1000)).then((data) => {
        setEditedBuildingDetails(data)
        setBuildingDetails(data)
    })

    useEffect(() => {
        if(!buildingId) {
            setEditedBuildingDetails({})
            setBuildingDetails({})
        } else {
            fetchBuildingDetails()
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
                                        setEditedBuildingDetails({...editedBuildingDetails, [v.apiName]: e.target.value})
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
