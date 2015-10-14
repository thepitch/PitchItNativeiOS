var React = require('react-native');

var {
    View,
    Text,
    ListView,
    TouchableHighlight
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
                  <Text>{subcomment.content}</Text>
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

module.exports = Subcomments;