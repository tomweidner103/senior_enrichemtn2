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
    const campus = student.campus || {};
    return (
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <img src={student.imageUrl} />
        <div>
          <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
        </div>
        <UpdateStudent 
        campuses={this.props.campus} />
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
