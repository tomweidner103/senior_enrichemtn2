import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AllCampuses from "./Campuses/Campuses";
import AllStudents from "./Students/Students";
import SingleCampus from "./Campuses/SingleCampus";
import SingleStudent from "./Students/SingleStudent";

const Root = () => {
  return (
    <div>
      <nav>Welcome!</nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <button><Link to='/campuses'>Campuses</Link></button>
        <button><Link to='/students'>Students</Link></button>
        <Switch>
          <Route exact path="/campuses" component={AllCampuses} />
          <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={AllStudents} />
          <Route path="/students/:studentId" component={SingleStudent} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
