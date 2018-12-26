import axios from "axios";

const ONE_STUDENT = "ONE_STUDENT";

export const getOneStudent = student => ({
  type: ONE_STUDENT,
  student
});

export const oneStudentThunk = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      dispatch(getOneStudent(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const oneStudent = (state = {}, action) => {
  switch (action.type) {
    case ONE_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default oneStudent;
