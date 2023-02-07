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

const SignupScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [emailInput, setEmailInput] = React.useState('');
  const [hiddenpassword, setHiddenpassword] = React.useState(true);
  const [nameInput, setNameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [usernameInput, setUsernameInput] = React.useState('');
  const [visiblepassword, setVisiblepassword] = React.useState(false);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View style={styles(theme).View1cc14a60}>
        <View style={GlobalStyles.ViewStyles(theme)['lodestar 2']}>
          <Text style={styles(theme).Text9daf1455}>{'Lodestar'}</Text>

          <Text style={styles(theme).Textd9c57856}>{'Create Account'}</Text>
        </View>
        {/* Full name */}
        <View style={styles(theme).View70baedc8}>
          <Icon
            size={24}
            name={'Ionicons/person'}
            color={theme.colors['Custom Color_20']}
          />
          <View style={styles(theme).View37e2a443}>
            {/* nameInput */}
            <TextInput
              onChangeText={newNameInputValue => {
                try {
                  setNameInput(newNameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput7247c2bd}
              placeholder={'Full Name'}
              editable={true}
              placeholderTextColor={theme.colors['Custom Color_20']}
            />
          </View>
        </View>
        {/* Username */}
        <View style={styles(theme).View3a8b4fae}>
          <Icon
            size={24}
            name={'AntDesign/tags'}
            color={theme.colors['Custom Color_20']}
          />
          <View style={styles(theme).View37e2a443}>
            {/* usernameInput */}
            <TextInput
              onChangeText={newUsernameInputValue => {
                try {
                  setUsernameInput(newUsernameInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput7247c2bd}
              placeholder={'User Name'}
              editable={true}
              placeholderTextColor={theme.colors['Custom Color_20']}
            />
          </View>
        </View>
        {/* Email */}
        <View style={styles(theme).View3a8b4fae}>
          <Icon
            size={24}
            name={'MaterialCommunityIcons/email'}
            color={theme.colors['Custom Color_20']}
          />
          <View style={styles(theme).View37e2a443}>
            {/* emailInput */}
            <TextInput
              onChangeText={newEmailInputValue => {
                try {
                  setEmailInput(newEmailInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput7247c2bd}
              placeholder={'Email'}
              editable={true}
              placeholderTextColor={theme.colors['Custom Color_20']}
            />
          </View>
        </View>
        {/* Password */}
        <View style={styles(theme).View3a8b4fae}>
          <Icon
            color={theme.colors['Custom Color_20']}
            size={24}
            name={'Entypo/lock'}
          />
          <>
            {!hiddenpassword ? null : (
              <View style={styles(theme).Viewa7e063e1}>
                {/* passwordInput1 */}
                <>
                  {!hiddenpassword ? null : (
                    <TextInput
                      onChangeText={newPasswordInput1Value => {
                        try {
                          setPasswordInput(newPasswordInput1Value);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).TextInput259d15e6}
                      placeholder={'Password'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      secureTextEntry={true}
                    />
                  )}
                </>
              </View>
            )}
          </>
        </View>
        {/* Sign up */}
        <Button
          onPress={() => {
            const handler = async () => {
              console.log('Sign up ON_PRESS Start');
              let error = null;
              try {
                console.log('Start ON_PRESS:0 FETCH_REQUEST');
                await LodestarMobileApi.signupPOST(Constants, {
                  email: emailInput,
                  name: nameInput,
                  pw: passwordInput,
                  username: usernameInput,
                });
                console.log('Complete ON_PRESS:0 FETCH_REQUEST');
                console.log('Start ON_PRESS:1 FETCH_REQUEST');
                const responsJsonLogin = await LodestarMobileApi.loginPOST(
                  Constants,
                  { password: passwordInput, username: usernameInput }
                );
                console.log('Complete ON_PRESS:1 FETCH_REQUEST', {
                  responsJsonLogin,
                });
                console.log('Start ON_PRESS:2 EXTRACT_KEY');
                const accessKey = responsJsonLogin.access;
                console.log('Complete ON_PRESS:2 EXTRACT_KEY', { accessKey });
                console.log('Start ON_PRESS:3 EXTRACT_KEY');
                const refreshKey = responsJsonLogin.refresh;
                console.log('Complete ON_PRESS:3 EXTRACT_KEY', { refreshKey });
                console.log('Start ON_PRESS:4 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'ACCESS_TOKEN',
                  value: 'Bearer ' + accessKey,
                });
                console.log('Complete ON_PRESS:4 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:5 SET_GLOBAL_VARIABLE');
                setGlobalVariableValue({
                  key: 'REFRESH_TOKEN',
                  value: refreshKey,
                });
                console.log('Complete ON_PRESS:5 SET_GLOBAL_VARIABLE');
                console.log('Start ON_PRESS:6 NAVIGATE_SCREEN');
                navigation.navigate('UpdateProfileScreen');
                console.log('Complete ON_PRESS:6 NAVIGATE_SCREEN');
              } catch (err) {
                console.error(err);
                error = err.message ?? err;
              }
              console.log(
                'Sign up ON_PRESS Complete',
                error ? { error } : 'no error'
              );
            };
            handler();
          }}
          style={styles(theme).Buttonebcf376b}
          title={'Sign up'}
        />
        <View style={styles(theme).View2addc6a4}>
          <Text style={styles(theme).Texte337cc86}>
            {'Already have an account?'}
          </Text>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SigninScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text style={styles(theme).Text9b626e87}>{'Sign in'}</Text>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonebcf376b: {
      backgroundColor: theme.colors['Text'],
      borderRadius: 24,
      fontFamily: 'OpenSans_400Regular',
      fontSize: 14,
      height: 24,
      textAlign: 'center',
      width: '90%',
    },
    Text9b626e87: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_500Medium',
      marginLeft: 7,
    },
    Text9daf1455: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_800ExtraBold',
      fontSize: 50,
    },
    TextInput259d15e6: {
      borderRadius: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      width: '100%',
    },
    TextInput7247c2bd: {
      borderRadius: 8,
      fontFamily: 'OpenSans_400Regular',
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
    Texte337cc86: {
      color: theme.colors['Custom Color_20'],
      fontFamily: 'OpenSans_400Regular',
    },
    View1cc14a60: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_40'],
      flex: 1,
      justifyContent: 'space-evenly',
      opacity: 1,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 20,
    },
    View2addc6a4: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 10,
      paddingTop: 10,
    },
    View37e2a443: { flex: 1, paddingLeft: 10, paddingRight: 10 },
    View3a8b4fae: {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 60,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    View70baedc8: {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 56,
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    Viewa7e063e1: {
      alignContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },
  });

export default withTheme(SignupScreen);
