import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'

const node = document.getElementById('content');
/*основное отличие реакта от джейквери в том, что меняется не dom, а состояние (state)
каждый раз при изменении state, автоматически запускается функция render
внутри render у нас есть доступ к state
*/
var TweetBox = React.createClass({
	
  getInitialState: function() {
	  //специальный метод инициализации состояния 
	return {
      text: ""
    };
  },
  onTextAreaChange: function(event) {
	  //навесить на событие onChange - это событие реакта, как ng-change в ангуляре
	  //указывать событие надо через this, чтобы была видна принадлежность именно к этому компоненту, как в хомяке
	  this.setState({ text: event.target.value }); //при такой установке значения, если в state больше одного ключа, остальные не удаляются
	  },
  getTextLength: function()
  {
	return this.state.text.trim();  
  },
  render: function() {
	  //в случае disabled опять проверка по жс внутри верстки....
    return (
      <div className="well clearfix">
		<p>
			<textarea className="form-control" onChange={this.onTextAreaChange}></textarea>
        </p>
		<p> 
			<span>{this.getTextLength()}</span>
			<button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
        </p>
      </div>
    );
  }
});

ReactDOM.render(
  <TweetBox />,
  node
);


