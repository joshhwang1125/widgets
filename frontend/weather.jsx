var React = require('react');
var ReactDOM = require('react-dom');

var Weather = React.createClass({
  getInitialState: function() {
    return {weather: "loading"};
  },

  getWeather: function (coords) {
    var lat = coords.latitude;
    var lon = coords.longitude;
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
    lat + '&lon=' + lon + '&APPID=645c5d39c7603f17e23fcaffcea1a3c1';
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    var self = this;

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var resp = request.responseText;
        var weatherData = resp;
        self.setState({weather: JSON.parse(weatherData).weather[0]});
      }
    };

    request.send();
  },

  componentDidMount: function() {
    var self = this;
    navigator.geolocation.getCurrentPosition(function (pos) {

      self.getWeather(pos.coords);
    });
  },



  render: function () {

    return <div>{JSON.stringify(this.state.weather.main)}</div>;
  }

});


module.exports = Weather;
