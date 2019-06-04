import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Skeleton, Typography, Button } from 'antd';
import BuildingCreationModal from './BuildingCreationModal';

const { Text } = Typography;

export default ({enableBuildingCreation, enableBuildingEdition}) => {
    const [buildings, setBuildings] = useState(null)

    const fetchBuildings = () => new Promise((resolve) => setTimeout(() => resolve(
        [
            {name: 'Budowa 1', id: '1'},
            {name: 'Budowa 2', id: '2'},
        ]
    ), 1000)).then(setBuildings)
    
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