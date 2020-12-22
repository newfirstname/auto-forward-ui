import React, { useState, useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'rsuite';

const Login = () => {
	const { login } = useContext(GlobalContext)

	const [formData, setFormData] = useState({username: '', password: ''})
	
	const onLoginClick = () => {
		login(formData)
	}

	const onUserNameChange = (e) => {
		setFormData({
			...formData,
			username: e
		})
	}

	const onPasswordChange = (e) => {
		setFormData({
			...formData,
			password: e
		})
	}

	return (
		<div>
			<h2 className='mb-4'>Login</h2>
			<Form>
				<FormGroup>
					<ControlLabel>Username:</ControlLabel>
					<FormControl onChange={onUserNameChange} name="name" />
				</FormGroup>
				<FormGroup>
					<ControlLabel>Password:</ControlLabel>
					<FormControl onChange={onPasswordChange} name="password" type="password" />
				</FormGroup>
				<FormGroup>
						<Button onClick={onLoginClick} appearance="primary" className='px-5'>Login</Button>
				</FormGroup>
			</Form>
		</div>
	)
}

export default Login
