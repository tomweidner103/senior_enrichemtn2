import React from "react";
import { connect } from "react-redux";
import { campusThunk, deleteCampusThunk } from "../../reducers/AllCampuses";
import {Link} from 'react-router-dom'

class Campuses extends React.Component {
  constructor() {
    super();
  }
  async componentDidMount() {
    await this.props.getCampuses();
  }
  render() {
    const campuses = this.props.allCampuses;
    return (
      <div>
        <ul>
          {campuses.map(campus => {
            return (
              <li key={campus.id}><Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
                <img src={campus.imageUrl} />
                <button onClick={() => {this.props.deleteCampus(campus)}}>DELETED</button>
              </li>
            );
          })}
        </ul>
        <button><Link to='/campuses/add'>Add Campus</Link></button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    allCampuses: state.allCampuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCampuses: () => dispatch(campusThunk()),
    deleteCampus: (campus) => dispatch(deleteCampusThunk(campus))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
