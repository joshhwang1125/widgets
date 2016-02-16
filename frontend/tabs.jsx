var React = require('react');
var ReactDOM = require('react-dom');

// var Headers = React.createClass({
//   getInitialState: function(){
//     return {selected: false};
//   }
//
//   if (this.props.selected){
//
//   }
//
//   render: function(){
//     <h3 className = "tabTitle"
//      onClick={self.clicked.bind(self, index)}>
//       {el.title}
//     </h3>
//   }
// });
var articles = [{title: "Hello", content: "Bye", selected: false},
{title: "Kanye", content: "West", selected: false},
{title: "Rocket", content: "Raccoon", selected: false}];

var Tabs = React.createClass({
  getInitialState: function() {
    return {tabIndex: 0};
  },

  clicked: function(idx) {
    this.setState({ tabIndex: idx});
    articles.forEach(function(el) {el.selected = false;});
    articles[idx].selected = true;
  },

  render: function () {
    var self = this;

    return(
      <div>
        <ul>
          {
            articles.map(function(el, index){

            return <li key={index} className = {"selected_"
                + articles[index].selected}>
                     <h3 className = "tabTitle"
                      onClick={self.clicked.bind(self, index)}>
                       {el.title}
                     </h3>
                   </li>;})
          }
        </ul>
        <article>
          {articles[this.state.tabIndex].content}
        </article>
      </div>
    );
  }


});


module.exports = Tabs;
