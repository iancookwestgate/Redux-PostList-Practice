export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
    const { title, user, content, id, votes, formattedWaitTime, timeOpen } = action;
    let newState = Object.assign({}, state, {
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
  default:
    return state;
  }
};
