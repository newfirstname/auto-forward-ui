import React, { useContext, useState } from 'react';
import { Button, Modal } from 'rsuite';
import RuleItem from './RuleItem';
import ManageRulesPanel from './ManageRulesPanel';
import { decodeRules, encodeRules } from './utils/rules';
import { GlobalContext } from '../../context/GlobalState';

const Rules = ({ rules, conId }) => {
  const { saveRules } = useContext(GlobalContext);

  const [modalState, setModalState] = useState(false);
  const [decodedRules, setDecodedRules] = useState(decodeRules(rules));

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = (isAfterSave) => {
    if (!isAfterSave) {
      setDecodedRules(decodeRules(rules));
    }
    setModalState(false);
  };

  const updateRule = (rule) => {
    const newRules = decodedRules.filter((r) => r.id !== rule.id);
    newRules.push(rule);
    console.log(newRules);

    setDecodedRules(newRules);
  };

  const removeRule = (rule) => {
    const newRules = decodedRules.filter((r) => r.id !== rule.id);

    setDecodedRules(newRules);
  };

  const addRule = (rule) => {
    const newRules = [...decodedRules, rule];

    setDecodedRules(newRules);
  };

  const save = async () => {
    const encodedRules = await encodeRules(decodedRules);

    console.log(encodedRules);

    await saveRules(encodedRules, conId);
    closeModal(true);
  };

  return (
    <div>
      {rules.length === 0 ? (
        <div>no rules</div>
      ) : (
        decodeRules(rules).map((rule, i) => <RuleItem key={i} rule={rule} />)
      )}
      <Button
        className="mt-4"
        color="green"
        appearance="ghost"
        onClick={openModal}
      >
        Edit Rules
      </Button>
      <Modal show={modalState} overflow={true} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Edit rules</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-1">
          <ManageRulesPanel
            rules={decodedRules}
            updateRule={updateRule}
            addRule={addRule}
            removeRule={removeRule}
          />
        </Modal.Body>
        <Modal.Footer className="mt-3">
          <Button onClick={closeModal} appearance="ghost" color="yellow">
            Cancel
          </Button>
          <Button onClick={save} appearance="ghost" color="green">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Rules;
