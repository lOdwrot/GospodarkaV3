import React, {useState} from 'react'
import { Checkbox, Button } from 'antd';

export default ({agreements}) => {
    const [checkedAgreements, setCheckedAgreements] = useState([])

    return (
        <div className='frame-item' style={{textAlign: 'center'}}>
            <div>
                Terms And Agreements
            </div>
            {agreements.map((v, index) => (
                <div key={index}>
                    <Checkbox 
                    onChange={() => setCheckedAgreements(checkedAgreements.includes(v.name) 
                        ? checkedAgreements.filter(i => i !== v.name)
                        : [...checkedAgreements, v.name]
                    )}>{v.name}</Checkbox>
                    <br/>
                </div>
            ))}
            <Button>
                Accept
            </Button>
        </div>
    )
}