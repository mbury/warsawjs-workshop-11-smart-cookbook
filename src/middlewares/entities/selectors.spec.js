import values from 'lodash/values';
import * as selectors from './selectors';

const altState = {
  entities: {
    post: {
      1: {
        id: 1,
        title: 'test',
        description: 'test',
      },
      2: {
        id: 2,
        title: 'test 2',
        description: 'test 2',
      },
    },
  },
};

test('initialState', () => {
  expect(selectors.initialState).toEqual({ entities: {} });
});

test('getEntity', () => {
  expect(selectors.getEntity(undefined, 'test')).toEqual({});
  expect(selectors.getEntity(selectors.initialState, 'test')).toEqual({});
  expect(selectors.getEntity(altState, 'test')).toEqual({});
  expect(selectors.getEntity(altState, 'post')).toEqual(altState.entities.post);
});

test('getDetail', () => {
  expect(selectors.getDetail(undefined, 'test')).toBeUndefined();
  expect(selectors.getDetail(undefined, 'test', 1)).toBeUndefined();
  expect(selectors.getDetail(selectors.initialState, 'test')).toBeUndefined();
  expect(
    selectors.getDetail(selectors.initialState, 'test', 1)
  ).toBeUndefined();
  expect(selectors.getDetail(altState, 'post')).toBeUndefined();
  expect(selectors.getDetail(altState, 'post', 1)).toEqual(
    altState.entities.post[1]
  );
});

test('getList', () => {
  expect(selectors.getList(undefined, 'test')).toEqual([]);
  expect(selectors.getList(undefined, 'test', [1])).toEqual([undefined]);
  expect(selectors.getList(selectors.initialState, 'test')).toEqual([]);
  expect(selectors.getList(selectors.initialState, 'test', [1])).toEqual([
    undefined,
  ]);
  expect(selectors.getList(altState, 'post')).toEqual(
    values(altState.entities.post)
  );
  expect(selectors.getList(altState, 'post', [1])).toEqual([
    altState.entities.post[1],
  ]);
});
