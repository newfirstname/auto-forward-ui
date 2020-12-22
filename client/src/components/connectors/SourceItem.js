import React from 'react';
import { FlexboxGrid, Icon } from 'rsuite';

const SourceItem = ({ source, removeSource }) => {
  const onXClick = () => {
    removeSource(source);
  };

  const xStyle = {
    color: '#c43',
    cursor: 'pointer',
  };

  return (
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item>{source}</FlexboxGrid.Item>
      <FlexboxGrid.Item onClick={onXClick}>
        <Icon icon="close" style={xStyle} />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default SourceItem;
