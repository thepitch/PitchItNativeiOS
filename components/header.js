'use strict'

var React = require('react-native');
var styles = require('../stylesheets/layout');

var {
  Text,
  View,
} = React;

var Header = React.createClass ({
  render() {
    return (
      <View style={styles.navContainer}>
        <Text style={styles.header}>Pitch It</Text>
      </View>
    );
  },
});

module.exports = Header