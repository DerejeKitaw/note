import axios from 'axios'

import {
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_LIST_FAIL,
} from '../constants/projectConstants'

export const listProjects = () => async (dispatch) => {
  const URL = '/api/projects'

  try {
    dispatch({ type: PROJECT_LIST_REQUEST })

    const { data } = await axios.get(URL)

    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
