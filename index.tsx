import { useRouter } from 'expo-router';
import { TopLeftShape, TopRightShapeWelcome, BottomRightShape, BottomLeftShape } from '@/components/WelcomeShapes';
import DafFullLogo from '@/components/DafLogo';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart } from 'lucide-react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>

        {/* Background Shapes */}
        <TopLeftShape />
        <TopRightShapeWelcome />
        <BottomRightShape />
        <BottomLeftShape />

        {/* Main Content */}
        <View style={styles.content}>

          {/* Logo */}
          <DafFullLogo />

          {/* Tagline */}
          <Text style={styles.tagline}>
            We Care for Your Child's Growth, Step by Step
          </Text>

          {/* Divider with Heart */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <View style={styles.heartContainer}>
              <Heart size={24} color="#FEACC2" fill="#FEACC2" />
            </View>
            <View style={styles.dividerLine} />
          </View>

        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsSection}>

          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={() => router.push('/login')}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  screen: {
    flex: 1,
    paddingHorizontal: 17,
    position: 'relative',
    overflow: 'hidden',
    paddingTop: 90,
    zIndex: 1,
  },

  content: {
    alignItems: 'center',
  },

  /* Tagline */
  tagline: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#637077',
    textAlign: 'center',
    width: 177.5,
    marginTop: 24,
    marginBottom: 24,
  },

  /* Divider */
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 170,
    marginBottom: 32,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(200, 205, 207, 0.37)',
  },

  heartContainer: {
    marginHorizontal: 8,
    backgroundColor: '#FFFFFF',
    padding: 4,
  },

  /* Buttons Section */
  buttonsSection: {
    width: '100%',
    marginTop: 24,
    zIndex: 1,
  },

  getStartedButton: {
    height: 48,
    borderRadius: 16,
    backgroundColor: '#5E62DD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  getStartedText: {
    fontFamily: 'Lato_400Regular',
    color: '#FFFFFF',
    fontSize: 16,
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    fontFamily: 'Lato_400Regular',
    color: '#637077',
    fontSize: 16,
  },

  loginLink: {
    fontFamily: 'Lato_400Regular',
    color: '#5E62DD',
    fontSize: 16,
  },

});