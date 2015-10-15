// Css
var React = require('react-native')
var { StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  votesBadge: {
    marginTop: 15,
    padding: 0,
    backgroundColor: '#dddddd',
    borderColor: '#dddddd',
    borderRadius: 5,
    borderWidth: 1,
    width: 50,
    height: 60,
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: 65
  },
  voteBox: {
    marginTop: 20,
    position: ('absolute'),
    left: 0,
  },
  containerBox: {
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    marginLeft: 15,
  },
  commentContainer: {
    marginTop: 15
  },
  commentHeader: {
    fontSize: 12,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  },
  commentSubHeader: {
    alignSelf: 'flex-end',
    fontSize: 12
  },
  pitchHeader: {
    flex: 1,
    borderLeftColor: 'grey',
    borderLeftWidth: 1,
    padding: 15,
    left: 65
  },
  titleHeader: {
    fontWeight: 'bold',
    lineHeight: 40,
    fontSize: 25,
  },
  authorName: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 15
    },
  taglineText: {
    fontStyle: 'italic',
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  firstLevelComment: {
    fontSize: 12,
  },
  secondLevelComment: {
    fontSize: 10,
    marginLeft: 15,
  },
  text: {
    fontSize: 12,
    marginBottom: 15,
    marginTop: 15
  },
});

module.exports = styles