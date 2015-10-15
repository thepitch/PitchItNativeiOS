var React = require('react-native');
var Subcomments = require('./pitch-subcomments')
var styles = require('../stylesheets/pitch-show');
var layoutStyles = require('../stylesheets/layout');

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

      goBack() {
        this.props.navigator.pop();
      },


  renderTitle: function() {
    return (
      <View layoutStyles={styles.navContainer}>
        <Text layoutStyles={styles.header}>Pitch It</Text>
      </View>
      )
  },

      renderComments: function(comment){
        return(
            <View style={styles.commentContainer}>
                <Text style={styles.firstLevelComment}>{comment.content}</Text>
                <Subcomments subcomments={comment.subcomments} />
            </View>
            )
      },
    render() {
        return (
            <View style={styles.commentContainer}>
                <Text style={styles.titleText}>Title: {this.props.pitch.title}</Text>
                <Text style={styles.authorName}>By {this.props.pitch.author}</Text>
                <Text style={styles.taglineText}>Tagline: {this.props.pitch.tagline}</Text>
                <Text style={styles.text}>Description: {this.props.pitch.description}</Text>
                <View style={layoutStyles.separator}/>
                <Text style={styles.headerText}>Comments</Text>
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this.renderComments} />
                <Text style={styles.text}>Votes: {this.props.pitch.vote_count} - Comments: {this.props.pitch.comment_count}</Text>
            </View>
        );
    }
});

module.exports = PitchDetail;