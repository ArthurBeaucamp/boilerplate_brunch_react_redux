/**
 * Initial State
 */
const initialState = {
  message: 'Redux',
};

/**
 * Types
 */
const DO_SOMETHING = 'DO_SOMETHING';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

/**
 * Export
 */
export default reducer;
