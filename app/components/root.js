import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AllCampuses from "./Campuses/Campuses";
import AddCampus from "./Campuses/AddCampus";
import AllStudents from "./Students/Students";
import SingleCampus from "./Campuses/SingleCampus";
import SingleStudent from "./Students/SingleStudent";
import AddStudent from "./Students/AddStudent";
import store from '../store'
import {campusThunk} from '../reducers/AllCampuses'
import {studentThunk} from '../reducers/AllStudents'

class Root extends React.Component {
  constructor(){
    super()
  }
  async componentDidMount(){
    await store.dispatch(campusThunk())
    await store.dispatch(studentThunk())
  }
  render(){
    return (
      <div>
        <nav>Welcome!</nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <button>
            <Link to="/campuses">Campuses</Link>
          </button>
          <button>
            <Link to="/students">Students</Link>
          </button>
          <Switch>
            <Route exact path='/' component={AllCampuses} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/add" component={AddCampus} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/add" component={AddStudent} />
            <Route path="/students/:studentId" component={SingleStudent} />
          </Switch>
        </main>
      </div>
    );

  }
}

export default Root;
