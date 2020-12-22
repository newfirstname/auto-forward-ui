import React from 'react';

const RuleItem = ({ rule }) => {
  const { name } = rule;

  const itemStyle = {
    border: `1px solid ${rule.color}`,
    padding: 7,
    borderRadius: 7,
    marginBottom: 7,
  };

  return <div style={itemStyle}>{name}</div>;
};

export default RuleItem;
