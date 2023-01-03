import React from 'react'

const Login = () => {

return <div  className='container'>
    <h1>Login</h1>
    <div  className='col-3'>
        <form>
            <div>
                <label for='email' className='form-label'>Email</label>
                <input id='email' className='form-control' type="text" placeholder="Email" autoComplete='off'/>
            </div>
            <div>
                <label for='password' className='form-label'>Password</label>
                <input id='password' className='form-control' type="password" placeholder="Password" autoComplete='off' />
            </div>
            <div className='center m-3'>
                <button className='btn btn-sm btn-info' type='button'>Login</button>
            </div>
            <hr/>
            <div className='m-3'>
                <button className='btn btn-sm btn-warning' type='button'>Register</button>
            </div>
        </form>
    </div>
</div>
}
export default Login;
