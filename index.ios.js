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
  getInitialState: function() {
    return { selectedTab: 'pitches' }
  },


  renderScene: function(route, navigator) {
    var Component = route.component;
    return (
      <View>
        <Component
          route={route}
          navigator={navigator}
          topNavigator={navigator} />
      </View>
      )
  },

  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title='Home'
          selected={this.state.selectedTab === 'pitches'}
          iconName={'home'}
          iconSize={20}
          onPress={() => {
            if (this.state.selectedTab !== 'pitches') {
              this.setState({
                selectedTab: 'pitches'
              });
            } else if (this.state.selectedTab === 'pitches') {
              this.refs.pitchRef.popToTop();
            }
          }}>
          {this.renderPitchList()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Profile'
          selected={this.state.selectedTab === 'profile'}
          iconName={'profile'}
          iconSize={20}
          onPress={() => {
            if (this.state.selectedTab !== 'profile') {
              this.setState({
                selectedTab: 'profile'
              });
            } else if (this.state.selectedTab === 'profile') {
              this.refs.profileRef.popToTop();
            }
          }}>
          {this.renderProfileView()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='News'
          selected={this.state.selectedTab === 'news'}
          iconName={'news'}
          iconSize={20}
          onPress={() => {
            if (this.state.selectedTab !== 'news') {
              this.setState({
                selectedTab: 'news'
              });
            } else if (this.state.selectedTab === 'news') {
              this.refs.newsRef.popToTop();
            }
          }}>
          {this.renderNewsView()}
        </TabBarIOS.Item>
      </TabBarIOS>
      )
  },




  renderPitchList: function() {
    return (
      <Navigator
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={(route, navigator) => {
              return <route.component navigator={navigator} {...route.passProps} />;
          }}
        ref='pitchRef'
        initialRoute={{
          title: 'Home',
          component: PitchList,
          passProps: {}
        }} />
    );
  },

  renderProfileView: function() {
    return (
      <Navigator
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={(route, navigator) => {
              return <route.component navigator={navigator} {...route.passProps} />;
          }}
        ref='profileRef'
        initialRoute={{
          title: 'Home',
          component: PitchList,
        }} />
    );
  },
  renderNewsView: function() {
      return (
        <Navigator
          ref={(navigator) => { this.navigator = navigator; }}
          renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.passProps} />;
            }}
          ref='newsRef'
          initialRoute={{
            title: 'News',
            component: PitchList,
            passProps: {}
          }} />
      );
    },
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
