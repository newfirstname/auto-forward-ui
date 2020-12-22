import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, FlexboxGrid, Panel } from 'rsuite'

import { GlobalContext } from '../../context/GlobalState';

const DeleteConnectorPage = ({ match }) => {
  const { activeConnector, getConnector, deleteConnector } = useContext(GlobalContext)
  const history = useHistory()

  const onCancelClick = () => {
    history.push(`/connectors/${match.params.id}`)
  }

  const onDeleteClick = async () => {
    await deleteConnector(match.params.id)

    history.push('/')
  }

  if (activeConnector) {
    if (Number(match.params.id) !== Number(activeConnector.id)) {
      getConnector(match.params.id)
    }
  }
  
  if (!activeConnector) {
    getConnector(match.params.id)
    return 'loading'
  } else {
    return (
      <Panel bordered header={`Delete ${activeConnector.name}?`}>
        this action cant be undone...
          <FlexboxGrid justify='space-between' className='mt-4'>
            <Button color='red' appearance='ghost' onClick={onDeleteClick}>
              Delete
            </Button>
            <Button color='blue' appearance='ghost' onClick={onCancelClick}>
              Cancel
            </Button>
          </FlexboxGrid>
      </Panel>
    )
  }
}

export default DeleteConnectorPage
