import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'

const node = document.getElementById('content');

//es6 way to define new component
class RootComponent extends React.Component {
  render() {
    return (
        <div>


        </div>
    )
  }
}


//it's an example of rendering reakt compontnts with routing
ReactDOM.render((
    //Internally, the router converts your <Route> element hierarchy to a route config.
    <Router>
        <Route path="/" component={RootComponent}>
        </Route>
    </Router>
), node);
//), document.body);
