import React from "react";
import { connect } from "react-redux";
import { studentThunk, deletedStudent } from "../../reducers/AllStudents";
import { Link, withRouter } from "react-router-dom";

class Students extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getStudents();
  }
  render() {
    const students = this.props.allStudents;
    return (
      <div>
        <ul>
          {students.map(student => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.firstName} {student.lastName}
                </Link>
                <img src={student.imageUrl} />
                <button
                  onClick={() => {
                    this.props.deleteStudent(student);
                  }}
                >
                  EXPEL
                </button>
              </li>
            );
          })}
        </ul>
        <button>
          <Link to="/students/add">Add Student</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allStudents: state.allStudents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStudents: () => dispatch(studentThunk()),
    deleteStudent: student => dispatch(deletedStudent(student))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Students)
);
