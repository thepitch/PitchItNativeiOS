'use strict';

var React = require('react-native');
var TabBar = require('./components/TabBar')
var {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TabBarIOS,
  View,
} = React;

var PitchList = require('./pitch-list');

var PitchItNative = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    return (
      <View style={styles.container}>
        <Component
          route={route}
          navigator={navigator}
          topNavigator={navigator} />
      </View>
      )
  },

  render: function() {
    return (
      <Navigator
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={(route, navigator) => {
              return <route.component navigator={navigator} {...route.passProps} />;
          }}
        initialRoute={{
          title: 'Home',
          component: PitchList,
        }} />
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

AppRegistry.registerComponent('PitchItNative', () => PitchItNative);
module.exports = PitchItNative;
