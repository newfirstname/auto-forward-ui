import React, { useState, useContext } from 'react';
import { Button, Form, FormControl, FormGroup } from 'rsuite';
import { GlobalContext } from '../../context/GlobalState';
import DestinationItem from './DestinationItem';

const Destinations = ({ destinations, conId }) => {
  const { addDest, removeDest } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    destId: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      destId: e,
    });
  };

  const onAddDest = async () => {
    await addDest(formData.destId, conId);
    setFormData({
      destId: '',
    });
  };

  const onRemoveDest = async (id) => {
    await removeDest(id, conId);
  };

  return (
    <div>
      {destinations.length === 0
        ? 'no destinations'
        : destinations.map((dest) => (
            <DestinationItem
              key={dest}
              destination={dest}
              removeDest={onRemoveDest}
            />
          ))}
      <Form className="mt-3">
        <FormGroup>
          <FormControl
            onChange={onChange}
            value={formData.destId}
            style={{ maxWidth: '100%' }}
            placeholder="Enter destination id"
          />
        </FormGroup>
        <FormGroup>
          <Button color="green" appearance="ghost" onClick={onAddDest}>
            Add Destination
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Destinations;
