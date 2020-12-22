import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { Form, FormGroup, FormControl, ControlLabel, Button } from 'rsuite';
import { GlobalContext } from '../../context/GlobalState';

const New = () => {
	const { addConnector } = useContext(GlobalContext)
	const history = useHistory()
	const [formData, setFormData] = useState({
		name: ''
	})

	const onChange = (e) => {
		setFormData({
			...formData,
			name: e
		})
	}
	
	const onsubmit = async () => {
		await addConnector(formData)
		history.push('/')
	}
	
	return (
		<div>
			<h2 className='mb-4'>Add new connector</h2>
			<Form>
				<FormGroup>
					<ControlLabel>Name:</ControlLabel>
					<FormControl onChange={onChange} name="name" />
				</FormGroup>
				<FormGroup>
					<Button appearance="primary" className='px-5' onClick={onsubmit}>Create</Button>
				</FormGroup>
			</Form>
		</div>
	)
}

export default New
