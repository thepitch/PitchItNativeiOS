var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View,
  ListView,
  TouchableHighlight
} = React;

var API_URL = 'http://localhost:3000/pitches';
var PAGE_SIZE = 25;
// var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL;


var PitchDetail = require('./pitch-detail');

var PitchList = React.createClass({
  getInitialState: function() {
    return {
      pitches: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        pitches: responseData,
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
      });
    })
    .done();
  },

  goToPitch(pitch) {
      this.props.navigator.push({
          component: PitchDetail,
          passProps: {
              pitch: pitch,
          }
      });
  },

  renderRow(pitch) {
      return (
          <TouchableHighlight onPress={this.goToPitch.bind(this, pitch)}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 5, paddingBottom: 5, backgroundColor: '#fff', marginBottom: 1 }}>
                  <Text style={{ marginLeft: 5, marginRight: 5 }}>{pitch.title}</Text>
              </View>
          </TouchableHighlight>
      );
  },

  render() {
      return (
          <View style={{ flex: 1, backgroundColor: '#ddd' }}>
              <Text style={{ marginTop: 60, marginLeft: 5, marginRight: 5, marginBottom: 10 }}>Select a pitch</Text>
              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow} />
          </View>
      );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



module.exports = PitchList;