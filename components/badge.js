var React = require('react-native')
var {
  View,
  Text,
  StyleSheet,
} = React

var Badge = React.createClass({
  render() {
    return (
      <View style={styles.badge}>
        <Text style={styles.voteText} children={this.props.children} />
      </View>
    )
  }
})

var styles = StyleSheet.create({
  badge: {
    marginRight: 10,
    padding: 0,
    backgroundColor: '#dddddd',
    borderColor: '#dddddd',
    borderRadius: 10,
    borderWidth: 4,
  },
  voteText: {
    margin: 0,
    padding: 0,
    fontSize: 9,
    backgroundColor: '#dddddd',
  },
})

module.exports = Badge