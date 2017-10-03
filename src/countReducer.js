export default function(state = { count: 0 }, action) {
  switch (action.type) {
    case 'decrement':
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case 'increment':
      return Object.assign({}, state, {
        count: state.count + 1
      });
    default:
      return state;
  }
}
