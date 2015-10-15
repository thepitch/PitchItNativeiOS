var React = require('react-native');

var {
    View,
    Text,
    ListView,
    TouchableHighlight,
    StyleSheet
} = React;

var Subcomments = React.createClass({
    getInitialState: function() {
    return {
      subs: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.props.subcomments),
      });
  },
  renderRow(subcomment) {
      return (
        <Text style={styles.subcommentText}>{subcomment.content}</Text>
      );
  },
    render() {
        return (
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderRow} />
        );
    }
});

var styles = StyleSheet.create({
  subcommentText: {
    fontSize: 10,
    marginLeft: 15,
    marginTop: 15

  }
});

module.exports = Subcomments;