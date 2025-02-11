const initialState = {
};

type Action = { type: any }

const sampleReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'ACTION_NAME':
      return {};
    default:
      return state;
  }
};

export default sampleReducer;
