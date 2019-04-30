import rootReducer from './../../src/reducers/index';
import voteReducer from './../../src/reducers/vote-reducer';
import postListReducer from './../../src/reducers/post-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      votes: {}
    });
  });

  test('Should contain postListReducer logic', () => {
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, { type: null }));
  });

  test('Should contain voteReducer logic', () => {
    expect(store.getState().votes).toEqual(voteReducer(undefined, { type: null }));
  });

});
