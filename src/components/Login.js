import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom'


const Login = () => {
    const { store, actions } = useContext(Context)
    const history = useHistory()

    const [ loginFormData, setFormData] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        setFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(loginFormData)
        //validations on email regex and password length

        //loginUser on submit
        actions.loginUser(loginFormData, history)

    }
    
    return (
        <div className='login-view d-flex flex-row justify-content-center'>
            {store.currentUser  === null ? 
                <div className='bg-stormtrooper'>
                    <div className='d-flex flex-row'>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-2 pt-5">
                        <form noValidate onSubmit={onSubmit}>
                            <h1 className="h1 mb-3 mt-5 font-weight-normal">Login</h1>
                            <div className="form-group">
                                <label htmlFor="username">User name</label>
                                <input type="text" className="form-control w-100" name="username" placeholder="User name" value={loginFormData.username} onChange={onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control w-100" name="password" placeholder="Password" value={loginFormData.password} onChange={onChange}/>
                            </div>
                            { store.invalidCredentials ? 
                                <div className=' text-center bg-danger rounded mt-2 mb-2'>
                                    "Username or password incorrect"   
                                </div>
                                :
                                ''
                            }
                            <button type="submit" className="btn btnLogin btn-lg btn-primary btn-block my-1">Login</button>
                        </form>
                        <div>
                            <span>Don't have an account? </span>
                            <Link to='/register'>
                                <a className="bg-dark rounded" href="#">Go to the Signup page</a>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
            :
            history.push('/private')
            }
        </div>
                
    )
}

export default Login