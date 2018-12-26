import axios from "axios";

const ONE_CAMPUS = "ONE_CAMPUS";

export const getOneCampus = campus => ({
  type: ONE_CAMPUS,
  campus
});

export const oneCampusThunk = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      console.log(data)
      dispatch(getOneCampus(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const oneCampus = (state = {}, action) => {
  switch (action.type) {
    case ONE_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

export default oneCampus;
