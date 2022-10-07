import React, { useState } from 'react'
import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../Input'
import { signinAuthUserWithEmailAndPassword } from '../firebase'


const Login = (props) => {


    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const { email, password } = contact
    const navigate = useNavigate()



    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signinAuthUserWithEmailAndPassword(email, password);
            navigate('/')
            alert('Success! You have logged in')

        }
        catch (error) {
            alert('login failed. Incorrect email or password')

        }
    }



    return <div className='head'>

        <br />
        <h1>Email</h1>
        <br />
        <Input
            name='email'
            type='text'
            placeholder='Email'
            onChange={handleChange}
            value={contact.email}
        />
        <h1>Password</h1>
        <br />
        <Input
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange}
            value={contact.password}
        />
        <br />
        <br />

        <button className='button' onClick={handleSubmit}>
            Sign in
        </button>
        <br></br>
        <br />

        <button3 className='but'>
        <Link className='but' to='/signup'>
        <h2>Don't have an account?</h2>
        </Link>
        </button3>


    </div>

}
export default Login