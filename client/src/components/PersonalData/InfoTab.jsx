import React, {useState, useEffect} from 'react';
import { Input, Button, Form } from 'antd'
import axios from 'axios'
import store from '../../storage/index'
import { setUser } from '../../storage/personalData/personalData.reducer';
const FormItem = Form.Item

export default ({
    _id,
    name,
    surname,
    grade,
    managerName,
    currentBuild,
    imageURL,
    mail,
    projectId
}) => {
    const [isEditMode, setEditMode] = useState(false)
    const [editedName, setName] = useState(name)
    const [editedSurname, setSurname] = useState(surname)
    const [editedMail, setMail] = useState(mail)
    const [buildingName, setBuildingName] = useState('')
    const [managerData, setManagerData] = useState({})

    const cancelEdit = () => {
        fetchUserData()
    }

    const fetchUserData = () => {
        axios.post('/user/getUser', {userId: _id}).then((resp) => {
            store.dispatch(setUser(resp.data))
            setSurname(resp.data.surname)
            setName(resp.data.name)
        })
        setEditMode(false)
    }

    const initFetch = async () => {
        console.log('# ProjectId:', projectId)
        if(!projectId) return
        const projectResp = await axios.post('/project/getProject', {projectId})
        setBuildingName(projectResp.data.name)
        const userResp = await axios.post('/user/getUser', {userId: projectResp.data.managerId})
        setManagerData(userResp.data)
    }
    
    useEffect(() => {
        initFetch()
    }, [])

    const updateUserData = () => {
        axios.put('/user/', {
            _id,
            name: editedName,
            surname: editedSurname,
            grade,
            managerName,
            currentBuild,
            imageURL,
            mail
        }).then(() => setEditMode(false))
    }

    const editableFields = [
        {
            label: 'Name',
            value: editedName,
            set: setName
        },
        {
            label: 'Surname',
            value: editedSurname,
            set: setSurname
        },
        {
            label: 'Mail',
            value: editedMail,
            set: setMail
        },
    ]

    const notEditableFields = [
        {
            label: 'Grade',
            value: grade
        }
    ]

    return (
        <div className={'tab-container'}>
            <div
                className={'image-container'}
                style={{backgroundImage: `url(${imageURL})`}}
            />
            {
                editableFields.map((v, index) => (
                    <FormItem key={index} help={v.label}>
                        <Input
                            value={v.value}
                            onChange={(e) => v.set(e.target.value)} 
                            placeholder={v.label}
                            disabled={!isEditMode}
                        />
                    </FormItem>
                ))
            }
            {
                notEditableFields.map((v, index) => (
                    <FormItem key={index} help={v.label}>
                        <Input
                            value={v.value}
                            placeholder={v.label}
                            disabled={true}
                        />
                    </FormItem>
                ))
            }
            <FormItem help={'Building'}>
                <Input
                    value={buildingName}
                    disabled={true}
                />
            </FormItem>
            <FormItem help={'Manager'}>
                <Input
                    value={`${managerData.name || ''} ${managerData.surname || ''}`}
                    disabled={true}
                />
            </FormItem>
            <div>
                {
                    !isEditMode &&
                    <Button onClick={() => setEditMode(true)}>Edit</Button>
                }
                {
                    isEditMode &&
                    <Button onClick={cancelEdit}>Cancel</Button>
                }
                {
                    isEditMode &&
                    <Button onClick={updateUserData}>Save</Button>
                }
            </div>
        </div>
    )
}