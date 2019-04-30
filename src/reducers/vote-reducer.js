export default (state = {}, action) => {
  let endVote;
  switch(action.type) {
    case 'ADD_VOTE':
      endVote = action.votes + action.dir;
      return endVote;
    default:
      return state;
  }
};
