import React, {useState, useEffect} from 'react'
import { Skeleton, Button, Input, Form, Select  } from 'antd';
import axios from "axios"
import history from '../../history'

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
    {
        label: 'Poczatek',
        apiName: 'startDate',
    },
    {
        label: 'Koniec',
        apiName: 'endDate',
    },
]

export default ({
    isPopUp,
    isEditMode=false,
    projectId=null,
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
        setEditedBuildingDetails(resp.data.find(v=>v._id === projectId))
        setBuildingDetails(resp.data.find(v=>v._id === projectId))
        
    }

    const addBuildingDetalis = async () => {
        const resp = await axios.post('/project', editedBuildingDetails)
        fetchBuildingDetails()
    }
    
    const updateBuildingDetalis = async () => {
        const resp = await axios.put('/project', editedBuildingDetails)
        fetchBuildingDetails()
    }

    const fetchavailableManagers = async () => {
        const resp = await axios.get('/user')
        setAvailableManagers(resp.data.filter(v => v.role === 'manager' ))
    }

    const init = () => {
        // setBuildingDetails(null)
        // setEditedBuildingDetails(null)
        // setSaveRequired(false)
        // setAvailableManagers([])
        if(!projectId) {
            setEditedBuildingDetails({})
            setBuildingDetails({})
            fetchavailableManagers()
        } else {
            fetchBuildingDetails()
            fetchavailableManagers()
        }
    }

    useEffect(() => {
        init()
    }, [])

    if(!editedBuildingDetails) {
        init()
        return null
    }

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
                        className={'image-containeditedBuildingDetailser'}
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
                            {availableManagers.map(v => <Option key={v._id} value={v._id}>{`${v.name} ${v.surname}`}</Option>)}
                        </Select>
                    </FormItem>
                    {
                        isEditMode &&
                        <div>
                            <Button onClick={() => {
                                setEditedBuildingDetails(buildingDetails)
                                setSaveRequired(false)
                                if(isPopUp) return window.location.reload()
                                history.goBack()
                                saveCallBack && saveCallBack(editedBuildingDetails)
                            }}>Cancel</Button>
                            <Button onClick={() => {
                                buildingDetails._id
                                ? updateBuildingDetalis(buildingDetails)
                                : addBuildingDetalis()
                                if(isPopUp) return window.location.reload()
                                history.goBack()
                                saveCallBack && saveCallBack()
                            }} disabled={!saveRequired}>Save</Button>
                        </div>
                    }
                </div>
            }
        </>
    )
}
