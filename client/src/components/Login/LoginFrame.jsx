import React, {useState} from 'react'
import { Input, Button, Form } from 'antd'
import styles from './Login.module.scss'
import axios from 'axios'
import history from '../../history'

const FormItem = Form.Item

export default ({
    setUserRole,
    setUser
}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const loginFlow = async () => {
        const resp = await axios.post(
            '/user/login',
            {
              mail: login,
              password: password
            }
        )
      
        if(!resp.data) {
            return setErrorMessage('Invalid Credentials')
        }
        
        const role = resp.data.role
        setUserRole(role)
        setUser(resp.data)
        if (role === 'worker') history.push('/workerModule')
        if (role === 'manager') history.push('/managerModule')
        if (role === 'boss') history.push('/bossModule')
    }

    return (
        <div>
            <div className={styles['container']}>
                <div className={'frame-item'}>
                    Here Will Be App Logo
                </div>               
                <div className={'frame-item'}>
                    <div style={{width: '100%', color: 'red', textAlign: 'center'}}>
                        {errorMessage}
                    </div>
                    <FormItem help={'Login'}>
                        <Input
                            value={login}
                            onChange={(e) => setLogin(e.target.value)} 
                            placeholder="Login"
                        />
                    </FormItem>
                    <FormItem help={'Password'}>
                        <Input.Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password"
                        />
                    </FormItem>
                    
                    <Button
                        style={{width: '100%'}}
                        disabled={!login || !password}
                        onClick={loginFlow}
                    >
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    )
}