const React = require('react');
const { View, Text } = require('react-native');

function Picker() {
  return React.createElement(View, null, React.createElement(Text, null, 'Picker'));
}
Picker.Item = () => null;
module.exports = { Picker };
