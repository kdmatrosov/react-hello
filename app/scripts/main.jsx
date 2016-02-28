import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'

const node = document.getElementById('content');

var TweetBox = React.createClass({
  render: function() {
    return (
      <div className="well clearfix">
		<p>
			<textarea className="form-control"></textarea>
        </p>
		<p>
			<button className="btn btn-primary pull-right">Tweet</button>
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  node
);


