var React = require('react-native');
var Subcomments = require('./pitch-subcomments')
var {
    View,
    Text,
    ListView,
    TouchableHighlight
} = React;

var PitchDetail = React.createClass({

    getInitialState: function() {
        return {
            comments: [],
          dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          }),
          loaded: false,
        };
      },
      componentDidMount: function() {
        this.fetchData();
      },
      fetchData: function() {
        var pitch_id = this.props.pitch.id;
        var Pitch_URL = 'http://localhost:3000/pitches/' + pitch_id.toString();
        fetch(Pitch_URL)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({
                comments: responseData,
              dataSource: this.state.dataSource.cloneWithRows(responseData.comments),
              loaded: true,
            });
          })
          .done();
      },
      renderComments: function(comment){
        return(
            <View>
                <Text>{comment.content}</Text>
                <Text>{comment.id}</Text>
                <Subcomments subcomments={comment.subcomments} />
            </View>
            )
      },
      goBack() {
        this.props.navigator.pop();
    },
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableHighlight onPress={this.goBack}>
                    <Text>Click to go back</Text>
                </TouchableHighlight>

                <Text>Title: {this.props.pitch.title}</Text>
                <Text>Tagline: {this.props.pitch.tagline}</Text>
                <Text>Description: {this.props.pitch.description}</Text>
                <Text>By: {this.props.pitch.author}</Text>
                <Text>ID: {this.props.pitch.id}</Text>
                <Text>Votes: {this.props.pitch.vote_count}</Text>
                <Text>Comments: {this.props.pitch.comment_count}</Text>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderComments} />
            </View>
        );
    }
});

module.exports = PitchDetail;