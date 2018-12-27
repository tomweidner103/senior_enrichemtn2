import React from "react";
import StudentForm from "./StudentForm";
import store from "../../store";
import { updateStudentThunk } from "../../reducers/OneStudent";

class UpdateStudent extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getId = this.getId.bind(this);
  }

  getId(evt) {
    this.props.campuses.map(campus => {
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
    await store.dispatch(updateStudentThunk(this.state));
  }

  render() {
    return (
      <StudentForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        getId={this.getId}
        campuses={this.props.campuses}
      />
    );
  }
}

export default UpdateStudent;
