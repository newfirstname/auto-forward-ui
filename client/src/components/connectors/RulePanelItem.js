import React, { useState } from 'react';
import {
  Toggle,
  Icon,
  TagGroup,
  Tag,
  Input,
  IconButton,
  Alert,
  Checkbox,
} from 'rsuite';

const RulePanelItem = ({
  rule,
  defaultActive,
  updateRule,
  addRule,
  removeRule,
}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const onActivation = (e) => {
    if (e === false) {
      removeRule(rule);
    } else {
      addRule(rule);
    }
    setIsActive(e);
  };

  const alterData = (action, data) => {
    if (action === 'add') {
      const newRule = {
        ...rule,
        data: [...rule.data, data],
      };

      updateRule(newRule);
    } else if (action === 'remove' || action === 'delete') {
      const newData = rule.isDataPair
        ? rule.data.filter((arr) => !(arr[0] === data[0] && arr[1] === data[1]))
        : rule.data.filter((item) => item !== data);

      const newRule = {
        ...rule,
        data: newData,
      };
      updateRule(newRule);
    }
  };

  const itemStyle = rule.disabled
    ? {
        borderColor: rule.color,
        opacity: '0.6',
      }
    : {
        borderColor: rule.color,
      };

  return (
    <div
      className={`rule-panel-item ${isActive ? 'active' : 'deactive'}`}
      style={itemStyle}
    >
      <div className="rule-panel-item-top">
        {rule.name}
        <Toggle
          checkedChildren={<Icon icon="check" />}
          unCheckedChildren={<Icon icon="close" />}
          defaultChecked={defaultActive}
          disabled={rule.disabled}
          onChange={onActivation}
        />
      </div>
      <div className="rule-panel-item-bottom">
        {rule.hasData && <DisplayRuleData rule={rule} alterData={alterData} />}
        <div>{rule.description}</div>
      </div>
    </div>
  );
};

const DisplayRuleData = ({ rule, alterData }) => {
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(rule.data);

  const deleteItem = (e) => {
    alterData('delete', e);
    const newData = rule.isDataPair
      ? rule.data.filter((arr) => !(arr[0] === e[0] && arr[1] === e[1]))
      : rule.data.filter((item) => item !== e);

    setItems(newData);
  };

  const onInputChange = (item) => {
    setInputValue(item);
  };

  const onInputConfirm = (e) => {
    if (rule.isDataPair) {
      let arr = e.target.value.trim().split(':');

      if (e.target.value === '') {
        setTyping(false);
      } else if (arr.length !== 2) {
        Alert.error('please seperate words with ":"', 4000);
      } else {
        arr = arr.map((item) => item.trim());
        alterData('add', arr);
        setItems([...items, arr]);
        setTyping(false);
        setInputValue('');
      }
    } else {
      alterData('add', e.target.value.trim());
      setItems([...items, e.target.value]);
      setTyping(false);
      setInputValue('');
    }
  };

  const onStartTyping = () => {
    setTyping(true);
  };

  if (rule.hasCheckList) {
    return <MediaDataDisplay rule={rule} alterData={alterData} />;
  } else {
    return (
      <TagGroup>
        {items.map((item, index) => (
          <Tag
            key={index}
            closable
            onClose={() => {
              deleteItem(item);
            }}
          >
            {rule.isDataPair ? item[0] + '=>' + item[1] : item}
          </Tag>
        ))}
        {typing ? (
          <Input
            className="tag-input"
            size="xs"
            style={{ width: 70 }}
            value={inputValue}
            onChange={onInputChange}
            onBlur={onInputConfirm}
            onPressEnter={onInputConfirm}
          />
        ) : (
          <IconButton
            className="tag-add-btn"
            onClick={onStartTyping}
            icon={<Icon icon="plus" />}
            appearance="ghost"
            size="xs"
          />
        )}
      </TagGroup>
    );
  }
};

const MediaDataDisplay = ({ rule, alterData }) => {
  const onChange = (e) => {
    const has = rule.data.includes(e);

    alterData(has ? 'delete' : 'add', e);
  };

  return (
    <div>
      <Checkbox
        defaultChecked={rule.data.includes('image')}
        onChange={onChange}
        value="image"
      >
        Image
      </Checkbox>
      <Checkbox
        defaultChecked={rule.data.includes('video')}
        onChange={onChange}
        value="video"
      >
        Video
      </Checkbox>
      <Checkbox
        defaultChecked={rule.data.includes('audio')}
        onChange={onChange}
        value="audio"
      >
        Audio
      </Checkbox>
      <Checkbox
        defaultChecked={rule.data.includes('document')}
        onChange={onChange}
        value="document"
      >
        Document
      </Checkbox>
    </div>
  );
};

export default RulePanelItem;
