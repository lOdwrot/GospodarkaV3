import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Skeleton, Typography, Button } from 'antd';
import BuildingCreationModal from './BuildingCreationModal';
import axios from 'axios';

const { Text } = Typography;

export default ({enableBuildingCreation, enableBuildingEdition}) => {
    const [buildings, setBuildings] = useState(null)

    const fetchBuildings = async () => {
        const resp = await axios.get('/project')
        setBuildings(resp.data)
    }
    
    useEffect(() => {
        fetchBuildings()
    }, [])

    return buildings ?
    (
        <div>
            {buildings.map((v, index) => (
                <div key={index}>
                    {
                        enableBuildingEdition &&
                        <Link to={`/editdBuilding/:${v.id}`}>
                            <Button shape="circle" icon="edit"/>
                        </Link>
                    }
                    <Link to={'/building'}>
                        <Text code>{v.name}</Text>
                    </Link>
                </div>
            ))}
            {
                enableBuildingCreation &&
                <BuildingCreationModal/>
            }
        </div>
    ) : <Skeleton/>
} 