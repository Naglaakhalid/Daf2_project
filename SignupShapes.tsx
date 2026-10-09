import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

/* ========== Top Right Shape (Register) ========== */
export function SignupTopRightShape() {
  return (
    <View style={styles.topRight} pointerEvents="none">
      <Svg width="186" height="117" viewBox="0 0 186 117">
        <Defs>
          <ClipPath id="clip0_34_22">
            <Rect width="186" height="118" fill="white" transform="translate(185.973 116.129) rotate(-179.031)" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#clip0_34_22)">
          <Path
            d="M182.132 115.731C158.996 94.9701 128.713 29.9485 187.149 46.6394L187.318 36.6409L185.973 116.129L182.132 115.731Z"
            fill="#FEE5F0"
            fillOpacity="0.84"
          />
          <Path
            d="M1.83823 4.33199C25.9695 37.4783 71.3535 14.8427 96.3208 -3.40418L1.99611 -5L1.83823 4.33199Z"
            fill="#FDF6FA"
          />
          <Path
            d="M117.059 -3.05333C126.771 29.9824 157.874 54.512 186.881 62.4705L187.969 -1.85364L117.059 -3.05333Z"
            fill="#D9D7EE"
          />
          <Path
            d="M129.111 115.167C144.927 93.9986 153.487 54.7378 127.429 36.6278C104.629 55.2781 108.298 99.4798 129.111 115.167Z"
            fill="#CEE3FD"
          />
          <Path
            d="M113.746 4.89177C86.7354 5.46828 59.0118 30.4029 55.6214 58.7496C88.2872 56.1351 119.921 35.4339 113.746 4.89177Z"
            fill="#E2D2FD"
          />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 0,
  },
});