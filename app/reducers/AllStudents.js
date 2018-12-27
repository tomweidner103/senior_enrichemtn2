import axios from "axios";

const GET_STUDENTS = "GET_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

const getStudents = students => ({
  type: GET_STUDENTS,
  students
});

const addOneStudent = student => ({
  type: ADD_STUDENT,
  student
});

const deleteStudent = student => ({
  type: DELETE_STUDENT,
  student
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

export const addStudentThunk = student => {
  return async dispatch => {
    try {
      const { data } = await axios.post("/api/students", student);
      dispatch(addOneStudent(data));
    } catch (err) {
      console.error(err);
    }
  };
};

export const deletedStudent = student => {
  return async dispatch => {
    try {
      await axios.delete(`/api/students/${student.id}`);
      dispatch(deleteStudent(student));
    } catch (err) {
      console.error(err);
    }
  };
};

const allStudents = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      const newArr = [...state, action.student];
      return newArr;
    case DELETE_STUDENT:
      const id = action.student.id;
      const students = [...state];
      const newArr2 = students.filter(student => student.id !== id);
      return newArr2;
    default:
      return state;
  }
};

export default allStudents;
