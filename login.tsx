import { useRouter } from 'expo-router';
import { TopRightShape, BottomLeftFlower, BottomRightFlower } from '@/components/ScreenShapes';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import {
  ChevronLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react-native';

/* ========== Google Logo Component ========== */
function GoogleLogo({ size = 48 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Path
        fill="#F44336"
        opacity="0.99"
        d="M25.6615 4.07416C27.8365 3.83116 29.1235 3.83116 31.4605 4.07416C35.5973 4.68644 39.4322 6.59861 42.4105 9.53416C40.3979 11.4366 38.4117 13.3667 36.4525 15.3242C32.7005 12.1442 28.5125 11.4102 23.8885 13.1222C20.4965 14.6822 18.1345 17.2102 16.8025 20.7062C14.6259 19.0856 12.4775 17.4274 10.3585 15.7322C10.2113 15.6546 10.0431 15.6263 9.87854 15.6512C13.2445 9.16116 18.5045 5.30116 25.6585 4.07116"
      />
      <Path
        fill="#FFC107"
        opacity="1"
        d="M9.87254 15.6512C10.0425 15.6252 10.2035 15.6522 10.3555 15.7322C12.4745 17.4274 14.6229 19.0857 16.7995 20.7062C16.457 22.0683 16.2411 23.4593 16.1545 24.8612C16.2285 26.2172 16.4435 27.5482 16.7995 28.8542L10.0345 34.2392C7.08854 28.0832 7.03454 21.8872 9.87254 15.6512Z"
      />
      <Path
        fill="#448AFF"
        opacity="1"
        d="M42.0895 40.7611C39.9831 38.9035 37.7779 37.1609 35.4835 35.5411C37.7835 33.9171 39.1795 31.6891 39.6715 28.8571H28.4005V21.0301C34.9005 20.9761 41.3975 21.0311 47.8915 21.1951C49.1235 27.8851 47.7005 33.9171 43.6225 39.2911C43.1376 39.8066 42.624 40.2972 42.0895 40.7611Z"
      />
      <Path
        fill="#43A047"
        opacity="0.99"
        d="M16.7995 28.8572C19.2595 34.9712 23.7695 37.8252 30.3295 37.4192C32.171 37.206 33.9366 36.5627 35.4835 35.5412C37.7795 37.1652 39.9815 38.9052 42.0895 40.7612C38.7495 43.7625 34.4909 45.5434 30.0085 45.8132C28.9902 45.8946 27.9669 45.8946 26.9485 45.8132C19.3125 44.9132 13.6745 41.0552 10.0345 34.2392L16.7995 28.8572Z"
      />
    </Svg>
  );
}

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.screen}>

          {/* Background shapes */}
          <TopRightShape />
          <BottomLeftFlower />
          <BottomRightFlower />

          {/* Back button */}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color="#000000" />
          </TouchableOpacity>

          {/* Content container */}
          <View style={styles.content}>

            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>
                Sign in to continue to your child's health{'\n'}
                journey
              </Text>
            </View>

            {/* Email input */}
            <View style={styles.inputContainer}>
              <Mail size={24} color="#637077" />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#637077"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password input */}
            <View style={styles.inputContainer}>
              <Lock size={24} color="#637077" />
              <TextInput
                style={styles.input}
                placeholder="password"
                placeholderTextColor="#637077"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <EyeOff size={24} color="#637077" />
                ) : (
                  <Eye size={24} color="#637077" />
                )}
              </TouchableOpacity>
            </View>

            {/* Login button */}
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>

            {/* Forgot password */}
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>

            {/* OR divider */}
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.line} />
            </View>

            {/* Google button */}
            <TouchableOpacity style={styles.googleButton}>
              <View style={styles.googleLogo}>
                <GoogleLogo size={48} />
              </View>
              <Text style={styles.googleText}>sign up with google</Text>
            </TouchableOpacity>

            {/* Sign up link */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/signup')}>
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </KeyboardAvoidingView>
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
    paddingHorizontal: 15,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },

  /* Back button - absolute position */
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15,
    width: 24,
    height: 24,
    zIndex: 10,
  },

  /* Screen content */
  content: {
    width: '100%',
  },

  /* Header */
  header: {
    alignItems: 'center',
    marginBottom: 64,
  },

  title: {
    fontFamily: 'Fredoka_400Regular',
    fontSize: 24,
    lineHeight: 29,
    color: '#000000',
    marginBottom: 16,
  },

  subtitle: {
    fontFamily: 'Lato_400Regular',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#637077',
  },

  /* Inputs */
  inputContainer: {
    height: 48,
    backgroundColor: 'rgba(200, 205, 207, 0.37)',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  input: {
    fontFamily: 'Lato_400Regular',
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#637077',
  },

  /* Login button */
  loginButton: {
    height: 48,
    borderRadius: 16,
    backgroundColor: '#5E62DD',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  loginText: {
    fontFamily: 'Lato_400Regular',
    color: '#FFFFFF',
    fontSize: 16,
  },

  /* Forgot password */
  forgotPassword: {
    fontFamily: 'Inter_400Regular',
    textAlign: 'center',
    color: '#5E62DD',
    fontSize: 16,
    marginTop: 24,
  },

  /* OR divider */
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(200, 205, 207, 0.37)',
  },

  orText: {
    fontFamily: 'Inter_400Regular',
    marginHorizontal: 14,
    color: '#637077',
    fontSize: 16,
  },

  /* Google button */
  googleButton: {
    height: 48,
    borderWidth: 1,
    borderColor: '#5E62DD',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  googleLogo: {
    position: 'absolute',
    left: 0,
  },

  googleText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    color: '#000000',
  },

  /* Sign up */
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  signupText: {
    fontFamily: 'Inter_400Regular',
    color: '#637077',
    fontSize: 16,
  },

  signupLink: {
    fontFamily: 'Inter_400Regular',
    color: '#5E62DD',
    fontSize: 16,
  },

});