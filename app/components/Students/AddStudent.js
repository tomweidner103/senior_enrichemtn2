import React from "react";
import { connect } from "react-redux";
import { addStudentThunk } from "../../reducers/AllStudents";
import StudentForm from './StudentForm'

class AddStudent extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getId = this.getId.bind(this);
  }

  getId(evt) {
    this.props.campus.map(campus => {
      if (campus.name === evt.target.value) {
        this.setState({
          campusId: campus.id
        });
      }
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    await this.props.addStudent(this.state);
    this.props.history.push('/students')
  }

  render() {
    return(
      <StudentForm 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      getId={this.getId}
      campuses={this.props.campus}
      />
    )       
  }
}

const mapStateToProps = state => {
  return {
    campus: state.allCampuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addStudent: student => dispatch(addStudentThunk(student))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStudent);
