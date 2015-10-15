// Css
var React = require('react-native')
var { StyleSheet } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  votesBadge: {
    marginRight: 10,
    padding: 0,
    backgroundColor: '#dddddd',
    borderColor: '#dddddd',
    borderRadius: 5,
    borderWidth: 4,
  },
    containerBox: {
    flexWrap: 'wrap',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    marginLeft: 15,
  },
  commentContainer: {
    marginTop: 15
  },
  commentHeader: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  commentSubHeader: {
    alignSelf: 'flex-end',
    fontSize: 12
  },
  titleHeader: {
    fontWeight: 'bold',
    lineHeight: 40,
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  authorName: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15
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
    marginLeft: 15,
  },
  text: {
    fontSize: 12,
    marginBottom: 15,
    marginTop: 15
  },
});

module.exports = styles