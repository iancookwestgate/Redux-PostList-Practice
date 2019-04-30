import voteReducer from './../../src/reducers/vote-reducer';
// import Moment from 'moment';

describe('voteReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(voteReducer({}, {type: null})).toEqual({});
  });

  test('Should record which post has been selected by user', () => {
    expect(voteReducer({}, {type: 'SELECT_POST', postID: 1})).toEqual(1);
  });

});
