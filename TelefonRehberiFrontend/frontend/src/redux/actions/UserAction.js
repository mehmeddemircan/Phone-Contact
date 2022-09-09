import { GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from "../constants/PersonConstant";
import axios from 'axios'
// export const GetAllUser = () => async (dispatch) => {
//     try {
//       dispatch({
//         type: GET_ALL_USER_REQUEST,
//       });
  
//       const { data } = await axios.get(`https://localhost:7046/api/Users/getAll`);
  
//       dispatch({
//         type: GET_ALL_USER_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: GET_ALL_USER_FAIL,
//         error: error.response,
//       });
//     }
//   };

export const GetAllUser = (pageNumber,pageSize) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USER_REQUEST,
    });

    const { data } = await axios.get(`https://localhost:7046/api/Users/getAll?PageNumber=${pageNumber}&PageSize=${pageSize}`);

    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USER_FAIL,
      error: error.response,
    });
  }
};