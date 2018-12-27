import React from "react";
import { connect } from "react-redux";
import { addCampusThunk } from "../../reducers/AllCampuses";

class AddCampus extends React.Component {
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
    await this.props.addCampus(this.state);
    this.props.history.push('/campuses')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <input onChange={this.handleChange} name="name" placeholder="name" />
        </label>
        <label>
          <input
            onChange={this.handleChange}
            name="address"
            placeholder="address"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
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
