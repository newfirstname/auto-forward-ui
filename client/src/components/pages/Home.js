import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';

import Connectors from '../connectors/Connectors';

import { GlobalContext } from '../../context/GlobalState';

const Home = () => {
	const { getConnectors, user, getUser, connectors } = useContext(GlobalContext)
	
	useEffect(() => {
		getUser()
		getConnectors()
		// eslint-disable-next-line
	}, [])
	
	if (!user) {
		return (
			<>
			<h2 className='mb-4'>
				Connectors
			</h2>
				<Connectors connectors={connectors} />
				</>
			) 
	} else {
		return (
			<>
				please <Link to={process.env.PUBLIC_URL + '/login'}>log in</Link>
			</>
		)
	}
}

export default Home
