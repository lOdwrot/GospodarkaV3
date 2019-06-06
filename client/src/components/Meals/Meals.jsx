import React, {useState, useEffect} from 'react'
import { Select, Button } from 'antd';
import axios from 'axios'
import { getCurrentUserId } from '../../storage/personalData/personalData.helper';

const Option = Select.Option;

export default () => {
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [mealList, setMealList] = useState([])
    const [isSaved, setSaved] = useState(false)
    
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/meals')
            setMealList(result.data)
        }

        fetchData()
    }, [])

    const placeOrder = async () => {
        const userId = getCurrentUserId()
        const mealId = selectedMeal._id
        const resp = await axios.post('/orders/submit', {
            userId, mealId
        })
        debugger
        setSaved(true)
    }

    return (
        <div className={'frame-item'} style={{minWidth: '300px', textAlign: 'center'}}>
            <div>Meal Managment</div>
            <div style={{textAlign: 'center'}}>
                <Select
                    disabled={isSaved}
                    placeholder={'Meal'} 
                    style={{ width: 150 }} 
                    value={selectedMeal && selectedMeal._id}
                    onChange={(mealId) => setSelectedMeal(mealList.find(v => v._id === mealId))}>
                    {mealList.map(v => <Option key={v._id} value={v._id}>{v.mealDescription}</Option>)}
                </Select>
                {
                    selectedMeal && 
                    <div style={{padding: '10px'}}>
                        <img width='150px' height='150px' src={selectedMeal.imgUrl}/>
                    </div>
                }
                {
                    selectedMeal &&
                    <Button 
                        disabled={isSaved}
                        onClick={placeOrder}>
                        Save
                    </Button>
                }
            </div>
        </div>
    )
}