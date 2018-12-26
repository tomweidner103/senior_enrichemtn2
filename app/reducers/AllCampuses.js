const GET_CAMPUSES = "GET_CAMPUSES";
import axios from "axios";

export const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

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

const allCampuses = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default allCampuses;
