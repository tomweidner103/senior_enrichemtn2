import React from "react";
import { connect } from "react-redux";
import { oneStudentThunk } from "../../reducers/OneStudent";
import { Link } from "react-router-dom";
import UpdateStudent from "./UpdateStudent";

class SingleStudent extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getOneStudent(this.props.match.params.studentId);
  }
  // componentDidUpdate(prevProps){
  //   console.log('prevprops', prevProps)
  // }
  render() {
    const student = this.props.oneStudent;
    const campus = this.props.campus || [];
    return (
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <img src={student.imageUrl} />
        <div>
          {campus.map(campus => {
            if (campus.id === student.campusId) {
              return <Link to={`/campuses/${campus.id}`} key={campus.id}>{campus.name}</Link>;
            }
          })}
        </div>
        <UpdateStudent state={student} campuses={this.props.campus} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    oneStudent: state.oneStudent,
    campus: state.allCampuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneStudent: id => dispatch(oneStudentThunk(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleStudent);
