var React = require('react-native');
var Badge = require('./components/badge')
var TabBar = require('./components/TabBar')
var styles = require('./stylesheets/layout')
var PitchDetail = require('./components/pitch-detail');

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
    fetch(API_URL)
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

  goToPitch: function(pitch) {
      this.props.navigator.push({
          component: PitchDetail,
          passProps: {
              pitch: pitch,
          }
      });
  },

  renderTitle: function() {
    return (
      <View style={styles.navContainer}>
      <Text style={styles.header}>Pitch It</Text>
      </View>
      );
  },

  renderPitch: function(pitch) {
      return (
          <TouchableHighlight onPress={this.goToPitch.bind(this, pitch)}>
            <View style={styles.container}>
              <View style={styles.rightContainer}>
                <Text style={styles.title}>{pitch.title}</Text>
                <Text style={styles.tagline}>{pitch.tagline}</Text>
                <Text style={styles.authordate}>Submitted by {pitch.author}, {pitch.created_at}</Text>

                <View style={[styles.row, styles.byline, styles.badge]}>
                  <Badge>{pitch.vote_count} votes</Badge><Badge>Comments: {pitch.comment_count}</Badge>
                </View>

                <View style={styles.separator}/>
              </View>
            </View>
          </TouchableHighlight>
      );
  },

  render() {
      return (
          <View style={{ flex: 1, backgroundColor: '#ddd' }}>
              <ListView
                  renderSectionHeader={this.renderTitle}
                  dataSource={this.state.dataSource}
                  renderRow={this.renderPitch}/>
                  <TabBar/>
          </View>
      );
  }
});

module.exports = PitchList;