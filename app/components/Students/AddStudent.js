import React from "react";
import { connect } from "react-redux";
import { addStudentThunk } from "../../reducers/AllStudents";

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
    const campus = this.props.campus;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">
          <input
            onChange={this.handleChange}
            name="firstName"
            placeholder="firstName"
          />
        </label>
        <label htmlFor="lastName">
          <input
            onChange={this.handleChange}
            name="lastName"
            placeholder="lastName"
          />
        </label>
        <label htmlFor="email">
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
        </label>
        <label htmlFor="campus">
          <select onChange={this.getId}>
            <option>--</option>
            {campus.map(campus => {
              return (
                <option key={campus.id} value={campus.name}>
                  {campus.name}
                </option>
              );
            })}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    campus: state.allCampuses
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
