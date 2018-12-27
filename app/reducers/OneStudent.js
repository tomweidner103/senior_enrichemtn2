import axios from "axios";

const ONE_STUDENT = "ONE_STUDENT";

export const UPDATE_STUDENT = "UPDATE_STUDENT";

const getOneStudent = student => ({
  type: ONE_STUDENT,
  student
});

export const updateStudent = student => ({
  type: UPDATE_STUDENT,
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

export const updateStudentThunk = student => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/students/${student.id}`);
      const object = update(data, student);
      await axios.put(`/api/students/${student.id}`, object);
      dispatch(updateStudent(object));
    } catch (err) {
      console.error(err);
    }
  };
};

export const update = (old, student) => {
  let obj = {};
  for (let key in old) {
    if (student[key] === undefined || student[key] === "") {
      obj[key] = old[key];
    } else {
      obj[key] = student[key];
    }
  }
  return obj;
};

const oneStudent = (state = {}, action) => {
  switch (action.type) {
    case ONE_STUDENT:
      return action.student;
    case UPDATE_STUDENT:
      const student = action.student;
      return student;
    default:
      return state;
  }
};

export default oneStudent;
