import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import {
  sayHelloAsync,
  sayHelloAsyncRequest,
  sayHelloAsyncSuccess,
  sayHelloAsyncFailure,
} from './hello';

import { helloEndpointRoute } from '../../shared/routes';

const mockStore = configureMockStore([thunkMiddleware]);

afterEach(() => {
  fetchMock.restore();
});

test('sayHelloAsync success', () => {
  const num = 666;
  const serverMessage = 'Async hello success';

  fetchMock.get(helloEndpointRoute(num), { serverMessage });
  const store = mockStore();

  return store.dispatch(sayHelloAsync(num))
    .then(() => {
      expect(store.getActions()).toEqual([
        sayHelloAsyncRequest(),
        sayHelloAsyncSuccess(serverMessage),
      ]);
    });
});

test('sayHelloAsync 404', () => {
  const num = 666;

  fetchMock.get(helloEndpointRoute(num), 404);
  const store = mockStore();

  return store.dispatch(sayHelloAsync(num))
    .then(() => {
      expect(store.getActions()).toEqual([
        sayHelloAsyncRequest(),
        sayHelloAsyncFailure(),
      ]);
    });
});

test('sayHelloAsync data error', () => {
  const num = 666;

  fetchMock.get(helloEndpointRoute(num), {});
  const store = mockStore();

  return store.dispatch(sayHelloAsync(num))
    .then(() => {
      expect(store.getActions()).toEqual([
        sayHelloAsyncRequest(),
        sayHelloAsyncFailure(),
      ]);
    });
});
