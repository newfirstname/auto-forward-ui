// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
      case 'set-connectors':
        return {
          ...state,
          connectors: action.payload
        }
      case 'set-active-connector':
        return {
          ...state,
          activeConnector: action.payload
        }
      case 'set-user':
        return {
          ...state,
          user: action.payload
        }
      default:
        return state;
    }
  };