import React, {useState, useEffect} from 'react'
import { Checkbox, Button } from 'antd';
import axios from "axios"
import store from '../../storage'

export default ({agreements}) => {
    const [checkedAgreements, setCheckedAgreements] = useState([])
    const [signedBeforeIds, setSignedBeforeIds] = useState([])
    const [allAgreements, setAllAgreements] = useState([])


    const fetchAgreements = async () =>axios.get('/document').then(resp=>{
        const response = resp.data
        
        console.log("#", response)
        //setCheckedAgreements(allAgreements.filter(v=> v.signed == signed ))
        setAllAgreements(response)
    })

    const fetchSignAgreements = async () =>{
        const userId = store.getState().personalData.user._id
        
        axios.get(`/userdoc/${userId}`).then(resp=>{
        // axios.get(`/userdoc/${userId}`).then(resp=>{
  
            setSignedBeforeIds(resp.data.map(v => v.docId))
        })
    }

    const addSignedDocument = async (userId, docId) => {
        const resp = await axios.post('/userdoc', {userId, docId})
    }

    useEffect(() => {
        fetchAgreements()
        fetchSignAgreements()
    }, [])

    return (
        <div className='frame-item' style={{textAlign: 'center'}}>
            <div>
                Terms And Agreements
            </div>
            {allAgreements.map((v, index) => (
                <div key={v._id}>
                    <Checkbox 
                        checked={signedBeforeIds.includes(v._id) || checkedAgreements.includes(v._id)}
                        disabled={signedBeforeIds.includes(v._id)}
                        onChange={() => setCheckedAgreements(checkedAgreements.includes(v._id) 
                            ? checkedAgreements.filter(i => i !== v._id)
                            : [...checkedAgreements, v._id]
                        )}>
                        <a href={v.url}>{v.name}</a>
                    </Checkbox>
                    <br/>
                </div>
            ))}
            <Button onClick={() =>{
                Promise.all(
                    checkedAgreements.map(v => addSignedDocument(
                        store.getState().personalData.user._id, 
                        v
                    ))
                ).then(fetchSignAgreements)
                 
            }}>
                Accept
            </Button>
        </div>
    )
}