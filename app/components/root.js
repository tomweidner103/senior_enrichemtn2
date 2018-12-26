import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AllCampuses from "../components/Campuses/Campuses";
import AllStudents from "../components/Students/Students";

const Root = () => {
  return (
    <div>
      <nav>Welcome!</nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <button><Link to='/campuses'>Campuses</Link></button>
        <button><Link to='/students'>Students</Link></button>
        <Switch>
          <Route path="/campuses" component={AllCampuses} />
          <Route path="/students" component={AllStudents} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
