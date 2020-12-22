import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
import { Alert } from 'rsuite';

const initialState = {
  connectors: [],
  user: null,
  activeConnector: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getUser = () => {
    const token = localStorage.getItem('token');

    if (token) {
    } else {
    }
  };

  const getConnectors = async () => {
    const res = await axios.get('/api/v1/connectors');

    dispatch({
      type: 'set-connectors',
      payload: res.data,
    });
  };

  const getConnector = async (id) => {
    const res = await axios.get(`/api/v1/connectors/${id}`);

    setActiveConnector(res.data[0]);
  };

  const addConnector = async (formData) => {
    await axios.post(`/api/v1/connectors`, {
      ...formData,
    });
  };

  const deleteConnector = async (id) => {
    await axios.delete(`/api/v1/connectors/${id}`);
  };

  const addSource = async (sourceId, conId) => {
    try {
      await axios.put('/api/v1/connectors', {
        action: 'addsource',
        sourceId,
        conId,
      });

      dispatch({
        type: 'set-active-connector',
        payload: {
          ...state.activeConnector,
          sources: [...state.activeConnector.sources, sourceId],
        },
      });

      return true;
    } catch (err) {
      if (err.response.data.msg === 'hassource') {
        Alert.error('source already exists', 4000);
      } else if (err.response.data.msg === 'isindests') {
        Alert.error('this id is a destination', 5000);
      }
      return false;
    }
  };

  const removeSource = async (sourceId, conId) => {
    await axios.put('/api/v1/connectors', {
      action: 'removesource',
      sourceId,
      conId,
    });

    const newSources = state.activeConnector.sources.filter(
      (s) => s !== sourceId
    );

    dispatch({
      type: 'set-active-connector',
      payload: {
        ...state.activeConnector,
        sources: newSources,
      },
    });

    return true;
  };

  const addDest = async (destId, conId) => {
    try {
      await axios.put('/api/v1/connectors', {
        action: 'adddest',
        destId,
        conId,
      });

      dispatch({
        type: 'set-active-connector',
        payload: {
          ...state.activeConnector,
          destinations: [...state.activeConnector.destinations, destId],
        },
      });

      return true;
    } catch (err) {
      if (err.response.data.msg === 'hasdest') {
        Alert.error('destination already exists', 4000);
      } else if (err.response.data.msg === 'isinsources') {
        Alert.error('this id is a source', 5000);
      }

      return false;
    }
  };

  const removeDest = async (destId, conId) => {
    await axios.put('/api/v1/connectors', {
      action: 'removedest',
      destId,
      conId,
    });

    const newDests = state.activeConnector.destinations.filter(
      (d) => d !== destId
    );

    dispatch({
      type: 'set-active-connector',
      payload: {
        ...state.activeConnector,
        destinations: newDests,
      },
    });

    return true;
  };

  const setActiveConnector = (conn) => {
    dispatch({
      type: 'set-active-connector',
      payload: conn,
    });
  };

  const saveRules = async (rules, conId) => {
    try {
      await axios.put('/api/v1/connectors', {
        action: 'saverules',
        rules,
        conId,
      });

      dispatch({
        type: 'set-active-connector',
        payload: { ...state.activeConnector, rules },
      });
    } catch (err) {
      Alert.error(err.response.data.msg);
    }
  };

  const login = (formData) => {
    console.log(formData);
  };

  return (
    <GlobalContext.Provider
      value={{
        connectors: state.connectors,
        activeConnector: state.activeConnector,
        user: state.user,
        getConnectors,
        setActiveConnector,
        getUser,
        getConnector,
        addConnector,
        deleteConnector,
        addSource,
        removeSource,
        addDest,
        removeDest,
        saveRules,
        login,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
