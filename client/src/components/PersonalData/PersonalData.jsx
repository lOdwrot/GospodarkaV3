import React from 'react'
import InfoTab from './InfoTab'

export default ({
    userData
}) => {
    
    return (
        <div>
            <InfoTab {...userData}/>
        </div>
    )
}