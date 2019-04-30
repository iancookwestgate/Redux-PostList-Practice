export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_POST':
      const { title, user, content, id, votes, formattedWaitTime, timeOpen } = action;
      newState = Object.assign({}, state, {
        [id]: {
          title: title,
          user: user,
          content: content,
          id: id,
          votes: votes,
          formattedWaitTime: formattedWaitTime,
          timeOpen: timeOpen
        }
      });
      return newState;
    case 'ADD_VOTE':
      newState = state;
      newState[action.id].votes += action.dir;
      const newStateArr = Object.keys(newState);
      let newStateMap = newStateArr.map(index => {
        return newState[index];
      });
      newStateMap.sort((a,b) => b.votes - a.votes);
      let outputState = {};
      newStateMap.forEach((state) => {
        outputState[state.id] = state;
      });
      return outputState;
    default:
      return state;
  }
};
