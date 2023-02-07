import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SigninScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={true}
      hasSafeArea={false}
    >
      <View style={GlobalStyles.ViewStyles(theme)['lodestar']}>
        <Text style={styles(theme).Text9daf1455}>{'Lodestar'}</Text>

        <Text style={styles(theme).Textd9c57856}>
          {'Sign in to get started'}
        </Text>
      </View>

      <View style={styles(theme).View57c55b06}>
        <View style={styles(theme).View18654fa6}>
          <Icon
            size={24}
            name={'MaterialCommunityIcons/email'}
            color={theme.colors['Custom Color_20']}
          />
          <View style={styles(theme).View05a20681}>
            {/* Username */}
            <TextInput
              onChangeText={newUsernameValue => {
                try {
                  setTextInputValue(newUsernameValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput0b02554c}
              value={textInputValue}
              placeholder={'User Name'}
              editable={true}
            />
          </View>
        </View>

        <View style={styles(theme).Viewb3601204}>
          <Icon
            name={'Entypo/lock'}
            size={24}
            color={theme.colors['Custom Color_20']}
          />
          <View style={styles(theme).View7f33605d}>
            {/* Password */}
            <TextInput
              onChangeText={newPasswordValue => {
                try {
                  setTextInputValue2(newPasswordValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput0b02554c}
              value={textInputValue2}
              placeholder={'Password'}
              editable={true}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ForgotPasswordScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Touchable6728d304}
        >
          <Text style={styles(theme).Text2061abf3}>{'Lost Password?'}</Text>
        </Touchable>
        {/* ErrorMessage */}
        <>
          {!Constants['ERROR_MESSAGE'] ? null : (
            <Text style={styles(theme).Text74080d2a}>
              {Constants['ERROR_MESSAGE']}
            </Text>
          )}
        </>
      </View>

      <View>
        {/* Button Solid */}
        <Button
          onPress={() => {
            const handler = async () => {
              console.log('Button Solid ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 FETCH_REQUEST');
                const responseJsonLogin = await LodestarMobileApi.loginPOST(
                  Constants,
                  { password: textInputValue2, username: textInputValue }
                );
                console.log('Complete ON_PRESS:0 FETCH_REQUEST', {
                  responseJsonLogin,
                });
                console.log('Start ON_PRESS:1 EXTRACT_KEY');
                const accessToken = responseJsonLogin.access;
                console.log('Complete ON_PRESS:1 EXTRACT_KEY', { accessToken });
                console.log('Start ON_PRESS:2 EXTRACT_KEY');
                const refreshToken = responseJsonLogin.refresh;
                console.log('Complete ON_PRESS:2 EXTRACT_KEY', {
                  refreshToken,
                });
                console.log('Start ON_PRESS:3 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'ACCESS_TOKEN',
                  value: 'Bearer ' + accessToken,
                });
                console.log('Complete ON_PRESS:3 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:4 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'REFRESH_TOKEN',
                  value: 'Bearer ' + refreshToken,
                });
                console.log('Complete ON_PRESS:4 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:5 EXTRACT_KEY');
                const errorMessage = responseJsonLogin.detail;
                console.log('Complete ON_PRESS:5 EXTRACT_KEY', {
                  errorMessage,
                });
                console.log('Start ON_PRESS:6 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'ERROR_MESSAGE',
                  value: errorMessage,
                });
                console.log('Complete ON_PRESS:6 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:7 TERMINATION_CHECK');
                if (errorMessage) {
                  return;
                }
                console.log('Complete ON_PRESS:7 TERMINATION_CHECK');
                console.log('Start ON_PRESS:8 NAVIGATE_SCREEN');
                navigation.navigate('LodeStar', {
                  screen: 'MyRoomsScreen_j5Jk7mIq',
                });
                console.log('Complete ON_PRESS:8 NAVIGATE_SCREEN');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Button Solid ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            };
            handler();
          }}
          style={styles(theme).Button16ef1c84}
          title={'Sign In'}
        >
          {'Sign Up'}
        </Button>
        <Button
          onPress={() => {
            try {
              navigation.navigate('SignupScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Buttondc02cbe2}
          title={'Create Account'}
        />
        <Text style={styles(theme).Text954748fe}>
          {
            'By signing in you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
          }
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button16ef1c84: {
      backgroundColor: theme.colors['Text'],
      borderRadius: 24,
      color: theme.colors['Custom Color_40'],
      fontFamily: 'OpenSans_400Regular',
      marginBottom: 16,
      marginLeft: 25,
      marginRight: 25,
      textAlign: 'center',
    },
    Buttondc02cbe2: {
      backgroundColor: theme.colors['Background'],
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: theme.colors['Text'],
      borderRadius: 24,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderWidth: 1,
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_400Regular',
      marginLeft: 25,
      marginRight: 25,
      textAlign: 'center',
    },
    Text2061abf3: {
      alignSelf: 'center',
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_400Regular',
    },
    Text74080d2a: { color: theme.colors['Community_Dark_Red'] },
    Text954748fe: {
      color: theme.colors.light,
      fontFamily: 'OpenSans_400Regular',
      paddingLeft: 25,
      paddingRight: 25,
      textAlign: 'center',
    },
    Text9daf1455: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_800ExtraBold',
      fontSize: 50,
    },
    TextInput0b02554c: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomWidth: 1,
      borderColor: theme.colors['Blue'],
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      fontFamily: 'OpenSans_400Regular',
      height: 40,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textd9c57856: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_700Bold',
      fontSize: 14,
      marginTop: 20,
      textAlign: 'center',
    },
    Touchable6728d304: { marginTop: 16 },
    View05a20681: {
      alignContent: 'flex-start',
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    View18654fa6: {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderRadius: 16,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      height: '60%',
      justifyContent: 'space-between',
      width: '100%',
    },
    View57c55b06: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      marginLeft: 25,
      marginRight: 25,
    },
    View7f33605d: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 10,
      paddingRight: 10,
    },
    Viewb3601204: {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderRadius: 16,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: 'row',
      height: '60%',
      justifyContent: 'space-between',
      marginTop: 10,
      width: '100%',
    },
    screen: {
      backgroundColor: theme.colors['Custom Color_40'],
      justifyContent: 'space-evenly',
    },
  });

export default withTheme(SigninScreen);
