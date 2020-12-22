import React from 'react';
import RulePanelItem from './RulePanelItem';

import { ruleAttr } from './utils/rulesConfig';

import './style/rulesPanel.css';

const ManageRulesPanel = ({ rules, updateRule, addRule, removeRule }) => {
  const getRulesWithId = (id) => {
    return rules.filter((rule) => rule.id === id)[0];
  };

  const havingRulesIds = rules.map((r) => r.id);

  const allRules = Object.keys(ruleAttr).map((ri) => ruleAttr[ri]);

  const mainRules = allRules.map((rule) => {
    if (havingRulesIds.includes(rule.id)) {
      return getRulesWithId(rule.id);
    } else {
      return rule;
    }
  });

  return (
    <>
      {mainRules.map((rule) => (
        <RulePanelItem
          key={rule.id}
          rule={rule}
          updateRule={updateRule}
          addRule={addRule}
          removeRule={removeRule}
          defaultActive={havingRulesIds.includes(rule.id)}
        />
      ))}
    </>
  );
};

export default ManageRulesPanel;
