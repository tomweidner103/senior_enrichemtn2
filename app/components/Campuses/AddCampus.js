import React from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../reducers/AllCampuses";
import CampusForm from './CampusForm'

class AddCampus extends React.Component {
  constructor() {
    super();
    // this.state = { 
    //   name: '',
    //   address: '',
    //   imageUrl: ''
    // }
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
    await this.props.addCampus(this.state);
    // this.props.history.push('/campuses')
  }
  render() {
    return (
      <CampusForm 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCampus: campus => dispatch(addCampusThunk(campus))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCampus);
