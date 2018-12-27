import React from "react";
import { connect } from "react-redux";
import { oneCampusThunk } from "../../reducers/OneCampus";
import { Link } from "react-router-dom";
import UpdateCampus from './UpdateCampus'

class SingleCampus extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getOneCampus(this.props.match.params.campusId);
  }
  render() {
    const campus = this.props.oneCampus;
    const students = campus.students || [];
    return (
      <div>
        <h1>{campus.name}</h1>
        <img src={campus.imageUrl} />
        <ul>
          {students.map(student => {
            return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.firstName} {student.lastName}
                </Link>
                <img src={student.imageUrl} />
              </li>
            );
          })}
        </ul>
        <div>
          <UpdateCampus campus={this.props.oneCampus} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    oneCampus: state.oneCampus,
    allStudents: state.allStudents,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOneCampus: id => dispatch(oneCampusThunk(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCampus);
