import React from "react";
import { connect } from "react-redux";
import { studentThunk } from "../../reducers/AllStudents";

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
                {student.firstName} {student.lastName}
                <img src={student.imageUrl} />
              </li>
            );
          })}
        </ul>
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
    getStudents: () => dispatch(studentThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
