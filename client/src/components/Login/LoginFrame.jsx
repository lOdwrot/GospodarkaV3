import React, {useState} from 'react'
import { Input, Button, Form } from 'antd'
import styles from './Login.module.scss'
import axios from 'axios'

const FormItem = Form.Item

export default ({
    logIn
}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <div className={styles['container']}>
                <div className={'frame-item'}>
                    Here Will Be App Logo
                </div>               
                <div className={'frame-item'}>
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
                        onClick={() => logIn(login, password)}
                    >
                        Log In
                    </Button>
                </div>
            </div>
        </div>
    )
}