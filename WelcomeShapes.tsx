import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

/* ========== Top Left Shape ========== */
export function TopLeftShape() {
  return (
    <View style={styles.topLeft} pointerEvents="none">
      <Svg width="118" height="109" viewBox="0 0 118 109">
        <Path
          d="M0 0H117C120.2 43.6 40.3333 90.8333 0 109V0Z"
          fill="#FEF4F9"
        />
      </Svg>
    </View>
  );
}

/* ========== Top Right Shape ========== */
export function TopRightShapeWelcome() {
  return (
    <View style={styles.topRight} pointerEvents="none">
      <Svg width="148" height="66" viewBox="0 0 148 66">
        <Path
          d="M148 0H0C9.56768 32.8668 58.8013 45.7345 82.2222 48.0599C102.554 73.0718 134.545 66.5777 148 60.2041V0Z"
          fill="#EAE8FD"
        />
      </Svg>
    </View>
  );
}

/* ========== Bottom Right Shape ========== */
export function BottomRightShape() {
  return (
    <View style={styles.bottomRight} pointerEvents="none">
      <Svg width="101" height="143" viewBox="0 0 101 143">
        <Path
          d="M114.624 142.183V0.182723C61.8236 -3.81728 45.6236 58.8494 44.1236 90.6827C-0.67643 100.683 -2.88255 129.183 1.61438 142.183H114.624Z"
          fill="#E9F3FB"
        />
      </Svg>
    </View>
  );
}

/* ========== Bottom Left Shape ========== */
export function BottomLeftShape() {
  return (
    <View style={styles.bottomLeft} pointerEvents="none">
      <Svg width="205" height="117" viewBox="0 0 205 117">
        <Path
          d="M-31.3417 116.992L-32 8.99644C10.1333 -17.1602 42.1722 19.8951 52.925 41.6923C63.4583 67.8489 91.5472 88.0389 104.275 94.8643C123.809 112.202 174.664 116.775 201.116 116.992H205C203.775 117.003 202.478 117.003 201.116 116.992H-31.3417Z"
          fill="#F2EAFF"
        />
      </Svg>
    </View>
  );
}

/* ========== Styles ========== */
const styles = StyleSheet.create({
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 0,
  },
});