var React = require('react');
var ReactDOM = require('react-dom');

var Autocomplete = React.createClass({
  // getInitialState: function() {
  //   return {tabIndex: 0};
  // },

  render: function () {
    // debugger;
    return(<div id="root">
      <input type="text" name="name"></input>
      <ul>
        {
          this.props.name.map(function(el,index) {
            return <li>{el}</li>;
          })
        }
      </ul>
    </div>);
  }

});


module.exports = Autocomplete;
