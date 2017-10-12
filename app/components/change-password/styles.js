import { Colors, Metrics } from '@theme/';

const React = require('react-native');

const { StyleSheet, Platform } = React;

module.exports = StyleSheet.create({
  headerView: {
    height: Metrics.screenWidth / 15,
    marginTop: (Platform.OS === 'android') ? 0 : Metrics.doubleBaseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.greyColor,
  },
  headerViewLogo: {
    width: Metrics.screenWidth * 0.33,
    height: Metrics.screenWidth / 15,
  },
});
