import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import './style.css';

export default () => (


    <div id="container">
        <h1>Menu</h1>
        <Link to='/workersManagments'>
            <Button id="button">Manage Workers</Button>
        </Link>
        <br/>
        <Link to='/inventory'>
            <Button id="button">Manage Inventory</Button>
        </Link>
        <br/>
        <Link to='/bossBuildingManagment'>
            <Button id="button">Manage Buildings</Button>
        </Link>
    </div>
)