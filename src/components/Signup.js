import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom'


const Signup = () => {
    const { store, actions } = useContext(Context)
    const [ registerFormData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })
    const history = useHistory()
    console.log(store.currentUser)

    const onChange = (e) => {
        setFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(registerFormData)
        //validations on email regex and password length

        //registerUser on submit
        actions.registerUser(registerFormData, history)

    }
    
    return (
        <div className='login-view d-flex flex-row justify-content-center'>
            {store.currentUser  === null ?
                 <div className='bg-stormtrooper'>
                    <div className='d-flex flex-row'>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-2 pt-5">
                        <form noValidate onSubmit={onSubmit}>
                            <h1 className="h1 mb-3 mt-5 font-weight-normal">Register</h1>
                            <div className="form-group">
                                <label htmlFor="username">User name</label>
                                <input type="text" className="form-control w-100" name="username" placeholder="User name" value={registerFormData.username} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control w-100" name="email" placeholder="Email" value={registerFormData.email} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control w-100" name="password" placeholder="Password" value={registerFormData.password} onChange={onChange}/>
                            </div>
                            { store.registerFailed ? 
                                <div className=' text-center bg-danger rounded mt-2 mb-2'>
                                    store.errorMessage   
                                </div>
                                :
                                ''
                                }
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Register</button>
                        </form>
                        <Link to='/'>
                            <a href="#">Already have an account?</a>
                        </Link>
                    </div>
                </div>
                </div>
                : 
                history.push('/private')
            }
        </div>
    )
}

export default Signup