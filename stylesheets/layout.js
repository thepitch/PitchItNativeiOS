var React = require('react-native')
var { StyleSheet } = React;

var styles = StyleSheet.create({
  navContainer: {
    backgroundColor: '22B7E0',
    height: 80,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  tagline: {
    textAlign: 'center',
    fontSize: 12
  },
  authordate: {
    fontStyle: 'italic',
    alignSelf: 'center',
    fontSize: 10,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
  byline: {
    padding: 8,
  },
  badge: {
    flex: 3,
    flexDirection: 'row'
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

module.exports = styles