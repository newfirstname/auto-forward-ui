import React from 'react';
import { FlexboxGrid, Icon } from 'rsuite';

const DestinationItem = ({ destination, removeDest }) => {
  const onXClick = () => {
    removeDest(destination);
  };

  const xStyle = {
    color: '#c43',
    cursor: 'pointer',
  };

  return (
    <FlexboxGrid justify="space-between">
      <FlexboxGrid.Item>{destination}</FlexboxGrid.Item>
      <FlexboxGrid.Item onClick={onXClick}>
        <Icon icon="close" style={xStyle} />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default DestinationItem;
