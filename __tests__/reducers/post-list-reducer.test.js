import postListReducer from './../../src/reducers/post-list-reducer';
import Moment from 'moment';

describe('postListReducer', () => {

  let action;
  const samplePostData = {
    title: "First",
    user: "name",
    content: "First Content",
    id: 0,
    votes: 0,
    formattedWaitTime: (new Moment()).fromNow(true),
    timeOpen: new Moment()
  };

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { title, user, content, id, votes, formattedWaitTime, timeOpen } = samplePostData;
    action = {
      type: 'ADD_POST',
      title: title,
      user: user,
      content: content,
      id: id,
      votes: votes,
      formattedWaitTime: formattedWaitTime,
      timeOpen: timeOpen
    };
    expect(postListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        user: user,
        content: content,
        id: id,
        votes: votes,
        formattedWaitTime: formattedWaitTime,
        timeOpen: timeOpen
      }
    })
  });

  test('Temporary dummy test: two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

});
