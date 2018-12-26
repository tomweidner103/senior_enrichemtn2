import axios from "axios";

const GET_STUDENTS = "GET_STUDENTS";

export const getStudents = students => ({
  type: GET_STUDENTS,
  students
});

export const studentThunk = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/students");
      dispatch(getStudents(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const allStudents = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default allStudents;
