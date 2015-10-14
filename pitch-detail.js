var React = require('react-native');
var {
    View,
    Text,
    TouchableHighlight
} = React;

var PitchDetail = React.createClass({
    goBack() {
        this.props.navigator.pop();
    },

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd', alignItems: 'center', justifyContent: 'center' }}>
                <Text>{this.props.pitch.title}</Text>
                <Text>{this.props.pitch.id}</Text>
                <Text>{this.props.pitch.author}</Text>

                <TouchableHighlight onPress={this.goBack}>
                    <Text>Click to go back</Text>
                </TouchableHighlight>
            </View>
        );
    }
});

module.exports = PitchDetail;