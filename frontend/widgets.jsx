var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs');
var Clock = require('./clock');
var Weather = require('./weather');
var Autocomplete = require('./autocomplete');


var Widgets = React.createClass({


  render: function (){
    return(
      <div>
        <Tabs/>
        <Clock/>
        <Weather/>
        <Autocomplete name={['josh', 'brian', 'john', 'winnie']}/>
      </div>


    );
  }

});

module.exports = Widgets;
