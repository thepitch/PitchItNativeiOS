var React = require('react-native');
var Header = require('./header')
var Subcomments = require('./pitch-subcomments')
var styles = require('../stylesheets/pitch-show');
var stylesLayout = require('../stylesheets/layout');

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
        <View style={stylesLayout.navContainer}>
          <Text style={stylesLayout.header}>Pitch It</Text>
        </View>
        );
    },

    renderComments: function(comment){
      return(
          <View style={styles.commentContainer}>
              <Text style={styles.firstLevelComment}>{comment.content}</Text>
              <Text style={{color: 'grey', fontSize: 10, alignSelf: 'flex-start',marginLeft: 15}}>Submitted by {comment.author} {comment.created_at}</Text>
              <Subcomments subcomments={comment.subcomments} />
              <View style={styles.subSeparator}/>
          </View>
          )
    },

    render() {
        return (
          <View style={styles.containerBox}>
          <Header/>
            <View style={styles.container}>
              <View style={styles.voteBox}>
                <Text style={styles.votesBadge}>{this.props.pitch.vote_count} {'\n'}
                  <Text style={{fontSize: 12}}>votes</Text>
                </Text>
              </View>
              <View style={styles.pitchHeader}>
                <Text style={styles.titleHeader}>{this.props.pitch.title}</Text>
                <Text style={styles.authorName}>By {this.props.pitch.author}</Text>
              </View>
            </View>

            <View style={styles.content}>
              <Text style={styles.taglineText}>{this.props.pitch.tagline}</Text>
              <Text style={styles.text}>Description: {this.props.pitch.description}</Text>
              <View style={styles.separator}/>
              <Text style={styles.commentHeader}>Comments ({this.props.pitch.comment_count})</Text>
              <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderComments} />
            </View>
          </View>
        );
    }
});

module.exports = PitchDetail;