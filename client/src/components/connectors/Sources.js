import React, { useState, useContext } from 'react';
import { Button, Form, FormControl, FormGroup } from 'rsuite';
import { GlobalContext } from '../../context/GlobalState';
import SourceItem from './SourceItem';

const Sources = ({ sources, conId }) => {
  const { addSource, removeSource } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    sourceId: '',
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      sourceId: e,
    });
  };

  const onAddSource = async () => {
    await addSource(formData.sourceId, conId);
    setFormData({
      sourceId: '',
    });
  };

  const onRemoveSource = async (id) => {
    await removeSource(id, conId);
  };

  return (
    <div>
      {sources.length === 0
        ? 'no source'
        : sources.map((s) => (
            <SourceItem key={s} source={s} removeSource={onRemoveSource} />
          ))}
      <Form className="mt-3">
        <FormGroup>
          <FormControl
            onChange={onChange}
            value={formData.sourceId}
            style={{ maxWidth: '100%' }}
            placeholder="Enter source id"
          />
        </FormGroup>
        <FormGroup>
          <Button color="green" appearance="ghost" onClick={onAddSource}>
            Add source
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Sources;
