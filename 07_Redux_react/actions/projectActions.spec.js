import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { listProjects } from '../../../store/actions'
import * as types from '../../../store/constants'
import moxios from 'moxios'
import axios from 'axios'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('listProjectActions', () => {
  beforeEach(() => {
    moxios.install(axios)
  })
  afterEach(() => {
    moxios.uninstall(axios)
  })

  it('should create request then success actions', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: [
          {
            name: 'marriot',
            location: 'kigali',
            owner: 'john',
          },
        ],
      })
    })
    const expectedActions = [
      {
        type: types.PROJECT_LIST_REQUEST,
      },
      {
        type: types.PROJECT_LIST_SUCCESS,
        payload: [
          {
            name: 'marriot',
            location: 'kigali',
            owner: 'john',
          },
        ],
      },
    ]
    const store = mockStore({ project: [] })
    await store.dispatch(listProjects()).then(async () => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should create request then fail actions', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 400,
        response: { message: 'invalid data', data: 'invalid data' },
      })
    })
    const expectedActions = [
      {
        type: types.PROJECT_LIST_REQUEST,
      },
      {
        type: types.PROJECT_LIST_FAIL,
        payload: 'invalid data',
      },
    ]
    const store = mockStore({ project: [] })
    await store.dispatch(listProjects()).then(async () => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
