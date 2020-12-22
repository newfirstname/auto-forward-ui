import React from 'react'
import { Table } from 'rsuite'
import { useHistory } from 'react-router-dom';
const { Column, HeaderCell, Cell } = Table;

const Connectors = ({connectors}) => {
	const history = useHistory()
	
	const openConnector = (data) => {
		history.push(process.env.PUBLIC_URL + '/connectors/' + data.id)
	}
	
	return (
		<>
			<Table
					className='mb-4'
          virtualized
          height={550}
          data={connectors}
          onRowClick={(data) => openConnector(data)}
        >
          <Column width={150}>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey="name" />
          </Column>

          <Column width={200}>
            <HeaderCell>Source(s)</HeaderCell>
            <Cell dataKey="sources" />
          </Column>

          <Column width={200}>
            <HeaderCell>Destination(s)</HeaderCell>
            <Cell dataKey="destinations" />
          </Column>

          <Column width={200}>
            <HeaderCell>Rules</HeaderCell>
            <Cell dataKey="rules" />
          </Column>
        </Table>
		</>
	)
}

export default Connectors
