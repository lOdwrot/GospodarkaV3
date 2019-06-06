import React, {useState} from 'react';
import { Input, Button, Form } from 'antd'

const FormItem = Form.Item

export default ({
    name,
    surname,
    grade,
    managerName,
    currentBuild,
    imageURL,
    mail
}) => {
    const [isEditMode, setEditMode] = useState(false)
    const [editedName, setName] = useState(name)
    const [editedSurname, setSurname] = useState(surname)
    const [editedMail, setMail] = useState(mail)

    const cancelEdit = () => {
        setEditMode(false)
        setName(name)
        setSurname(surname)
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
        },
        {
            label: 'Manager Name',
            value: managerName
        },
        {
            label: 'Current Build',
            value: currentBuild
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
                    <Button>Save</Button>
                }
            </div>
        </div>
    )
}