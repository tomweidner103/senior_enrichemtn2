import axios from "axios";
import { update } from "../reducers/OneStudent";

const ONE_CAMPUS = "ONE_CAMPUS";

export const UPDATE_CAMPUS = "UPDATE_CAMPUS";

export const getOneCampus = campus => ({
  type: ONE_CAMPUS,
  campus
});

const updateCampus = campus => ({
  type: UPDATE_CAMPUS,
  campus
});

export const oneCampusThunk = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      dispatch(getOneCampus(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateCampusThunk = campus => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/campuses/${campus.id}`);
      const campusObj = update(data, campus);
      await axios.put(`/api/campuses/${campus.id}`, campusObj);
      dispatch(updateCampus(campusObj));
    } catch (err) {
      console.error(err);
    }
  };
};

const oneCampus = (state = {}, action) => {
  switch (action.type) {
    case ONE_CAMPUS:
      return action.campus;
    case UPDATE_CAMPUS:
      return action.campus
    default:
      return state;
  }
};

export default oneCampus;
