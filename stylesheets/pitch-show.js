// Css
var React = require('react-native')
var { StyleSheet } = React;

var styles = StyleSheet.create({
    commentContainer: {
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    paddingTop: 18,
    marginLeft: 15,
  },
  titleText: {
    textDecorationLine: 'underline',
    lineHeight: 40,
    padding: 15,
    fontSize: 18,
    backgroundColor: '#f2f2f2',
    textAlign: 'center',
  },
  authorName: {
    fontSize: 12,
    textAlign: 'center'
    },
  taglineText: {
    fontStyle: 'italic',
    color: 'grey',
    fontSize: 12,
    textAlign: 'center',
  },
  headerText: {
    fontWeight: 'bold'
  },
  firstLevelComment: {
    fontSize: 12,
  },
  secondLevelComment: {
    fontSize: 10,
    marginLeft: 15
  },
  text: {
    fontSize: 12,
    marginBottom: 15
  },
});

module.exports = styles