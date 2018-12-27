import axios from "axios";
import { runInNewContext } from "vm";

const ONE_STUDENT = "ONE_STUDENT";

const UPDATE_STUDENT = 'UPDATE_STUDENT'

const getOneStudent = student => ({
  type: ONE_STUDENT,
  student
});

const updateStudent = student => ({
  type: UPDATE_STUDENT,
  student
})

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
    try{
      console.log('student', student)
      const { data } = await axios.put(`/api/students/${student.id}`, {params: {id:student.id}})
      dispatch(updateStudent(data))
    }catch(err){
      console.error(err)
    }
  }
}

const oneStudent = (state = {}, action) => {
  switch (action.type) {
    case ONE_STUDENT:
      return action.student;
    case UPDATE_STUDENT:
      const student = action.student
      return student
    default:
      return state;
  }
};

export default oneStudent;
