var React = require('react');
var ReactDOM = require('react-dom');

var Clock = React.createClass({
  getInitialState: function() {
    return {date: new Date()};
  },

  tick: function() {
    this.intervalId = this.setState({date: new Date()});
  },

  componentDidMount: function() {
    setInterval(this.tick, 1000);
  },

  render: function () {
    return <div>{this.state.date.toString()}</div>;
  }

});


module.exports = Clock;
