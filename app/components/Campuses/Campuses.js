import React from "react";
import { connect } from "react-redux";
import { campusThunk } from "../../reducers/AllCampuses";

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
              <li key={campus.id}>
                {campus.name}
                <img src={campus.imageUrl} />
              </li>
            );
          })}
        </ul>
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
    getCampuses: () => dispatch(campusThunk())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
