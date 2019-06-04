import React, {useState} from 'react'
import { Select, Button } from 'antd';

const Option = Select.Option;

export default ({mealList, userChoice}) => {
    const [selectedMeal, setSelectedMeal] = useState('')


    return (
        <div className={'frame-item'} style={{minWidth: '300px', textAlign: 'center'}}>
            <div>Meal Managment</div>
            {
                userChoice && 
                <div>
                    Your choice for next meal: {userChoice.name}
                </div>
            }
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Select 
                    placeholder={'Meal'} 
                    style={{ width: 150 }} 
                    value={selectedMeal}
                    onChange={setSelectedMeal}>
                    {mealList.map(v => <Option key={v.name} value={v.name}>{v.name}</Option>)}
                </Select>
                <Button onClick={() => {}}>
                    Save
                </Button>
            </div>
        </div>
    )
}