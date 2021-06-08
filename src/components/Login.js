import React from 'react';
import {NavLink} from 'react-router-dom';
import img from "../images/skeleton.jpg";
import styles from '../index.css';


const Login = () => {
    return (
        <>
            <body className ="form-v6">
	<div className ="page-content">
		<div className ="form-v6-content">
			<div className ="form-left">
				<img className="login-img" src={img} alt="form" />
			</div>
			<form className ="form-detail" action="#" method="post">
				<h2>Login Form</h2>
				<div className ="form-row">
					<input type="text" name="your-email" id="your-email" className ="input-text" placeholder="Email Address" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
				</div>
				<div className ="form-row">
					<input type="password" name="password" id="password" className ="input-text" placeholder="Password" required></input>
				</div>
				<div className ="form-row-last">
					<input type="submit" name="login" className ="register" value="login" />
				</div>
                <div className ="form-row-last">
                <NavLink exact to='/signup'>User not Registered.</NavLink>
				</div>

			</form>
            
		</div>
	</div>
</body>
        </>
    )
}

export default Login;
