import React from "react";
import CampusForm from "./CampusForm";
import { connect } from "react-redux";
import { updateCampusThunk } from "../../reducers/OneCampus";

class UpdateCampus extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const id = this.props.campus.id;
    const state = { ...this.state, id };
    await this.props.update(state);
  }
  render() {
    return (
      <CampusForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: campus => dispatch(updateCampusThunk(campus))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UpdateCampus);
