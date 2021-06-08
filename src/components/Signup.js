import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import img from "../images/form-v6.jpg";
import styles from '../index.css';

const Signup = () => {

const [user, setUser] = useState({
	name:"",email:"",phone:"",work:"",password:"",cpassword:""
});

let name, value;

const handleInputs = (e)=>
{
	// console.log(user);
	name = e.target.name;
	value = e.target.value;

	setUser({...user, [name]:value});
}

    return (
        <>
<body className ="form-v6">
	<div className ="page-content">
		<div className ="form-v6-content">
			<div className ="form-left">
				<img src={img} alt="form" />
			</div>
			<form className ="form-detail" action="#" method="post">
				<h2>Register Form</h2>
				<div className ="form-row">
					<input type="text" name="name" id="full-name" className ="input-text" placeholder="Your Name" value={user.name} onChange={handleInputs} required />
				</div>
				<div className ="form-row">
					<input type="text"  name="email" id="your-email" className ="input-text" placeholder="Email Address" value={user.email} onChange={handleInputs} required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
				</div>
                <div className ="form-row">
					<input type="text"  name="phone"  id="your-email" className ="input-text" placeholder="Mobile number" value={user.phone} onChange={handleInputs} required ></input>
				</div>
                <div className ="form-row">
					<input type="text"  name="work" id="your-email" className ="input-text" placeholder="Profession" value={user.work} onChange={handleInputs} required></input>
				</div>
				<div className ="form-row">
					<input type="password" name="password" id="password" className ="input-text" placeholder="Password" value={user.password} onChange={handleInputs} required></input>
				</div>
				<div className ="form-row">
					<input type="password"  name="cpassword" id="comfirm-password" className ="input-text" placeholder="Comfirm Password" value={user.cpassword} onChange={handleInputs}  required></input>
				</div>
				<div className ="form-row-last">
					<input type="submit" onChange={handleInputs} name="register" className ="register" value="Register" />
				</div>
                <div className ="form-row-last">
                <NavLink exact to='/login'>I am already Registered.</NavLink>
				</div>

			</form>
            
		</div>
	</div>
</body>
      </>
    );
}

export default Signup;
