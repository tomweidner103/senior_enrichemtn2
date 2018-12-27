import axios from "axios";
import {UPDATE_CAMPUS} from './OneCampus'
import {replace} from '../reducers/AllStudents'

const ADD_CAMPUS = "ADD_CAMPUS";
const GET_CAMPUSES = "GET_CAMPUSES";
const DELETE_CAMPUS = "DELETE_CAMPUS";

const addOneCampus = campus => ({
  type: ADD_CAMPUS,
  campus
});

const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

const deleteCampus = campus => ({
  type: DELETE_CAMPUS,
  campus
});

export const addCampusThunk = campus => {
  return async dispatch => {
    try {
      const { data } = await axios.post("/api/campuses", campus);
      dispatch(addOneCampus(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const campusThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/campuses");
      dispatch(getCampuses(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deleteCampusThunk = campus => {
  return async dispatch => {
    try {
      await axios.delete(`/api/campuses/${campus.id}`);
      dispatch(deleteCampus(campus));
    } catch (err) {
      console.error(err);
    }
  };
};

const allCampuses = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      const newArr = [...state, action.campus];
      return newArr;
    case DELETE_CAMPUS:
      const campuses = [...state];
      const id = action.campus.id;
      const newArr2 = campuses.filter(campus => campus.id !== id);
      return newArr2;
    case UPDATE_CAMPUS:
      const arr = [...state]
      const rpld = action.campus
      return replace(arr, rpld)
    default:
      return state;
  }
};

export default allCampuses;
