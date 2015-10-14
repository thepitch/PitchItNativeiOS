var React = require('react-native');
var React = require('../index.ios.js');
var styles = require('../stylesheets/layout')


var {
  View,
  Text
} = React;

var Pitch = React.createClass({
  renderTitle: function() {
    return (
      <View style={styles.navContainer}>
      <Text style={styles.header}>Pitch It</Text>
      </View>
      );
  },
  render(){
    return (
      <View style={styles.container}>
      <View style={styles.rightContainer}>
      <Text style={styles.title}>{pitch.title}</Text>
      <Text style={styles.tagline}>{pitch.tagline}</Text>
      <Text style={styles.authordate}>Submitted by {pitch.author}, {pitch.created_at}</Text>

      <View style={[styles.row, styles.byline, styles.badge]}>
      <Badge>{pitch.vote_count} votes</Badge><Badge style={styles.year}>Comments: {pitch.comment_count}</Badge>
      </View>

      <View style={styles.separator}/>
      </View>
      </View>
      );
  },
});

module.exports = Pitch;