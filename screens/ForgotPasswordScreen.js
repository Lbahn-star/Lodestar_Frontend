import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const ForgotPasswordScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).Viewfbc072c8}>
        {/* Back Click */}
        <View style={styles(theme).View53f79c36}>
          <Touchable
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Icon
              size={24}
              name={'Ionicons/arrow-back-sharp'}
              color={theme.colors['Custom Color_2']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Textc014fbe5}>{'Forgot Password'}</Text>
      </View>

      <View style={styles(theme).View55977854}>
        <View style={styles(theme).View2c4fedbd}>
          <Image
            style={styles(theme).Imagedea3f7c5}
            resizeMode={'cover'}
            source={Images.FPimage}
          />
          <Text style={styles(theme).Textc60db9a2}>
            {
              'Select which contact details should we use to reset your password'
            }
          </Text>
        </View>
        {/* SMS */}
        <Touchable>
          <View style={styles(theme).Viewfa66f54f}>
            <Image
              style={styles(theme).Image42ee3e97}
              resizeMode={'cover'}
              source={Images.IconSMS}
            />
            <View style={styles(theme).Viewbbf6a5ed}>
              <Text style={styles(theme).Text2cdf0b02}>{'via SMS:'}</Text>

              <Text style={styles(theme).Text8e7040ba}>
                {'+1 111 ******99'}
              </Text>
            </View>
          </View>
        </Touchable>
        {/* Email */}
        <Touchable>
          <View style={styles(theme).Viewc75ebd41}>
            <Image
              style={styles(theme).Image42ee3e97}
              resizeMode={'cover'}
              source={Images.ViaEmail}
            />
            <View style={styles(theme).Viewbbf6a5ed}>
              <Text style={styles(theme).Text2cdf0b02}>{'via Email:'}</Text>

              <Text style={styles(theme).Text8e7040ba}>
                {'and***ey@yourdomain.com'}
              </Text>
            </View>
          </View>
        </Touchable>
      </View>
      {/* Continue */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('CreateNewPasswordScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Buttonb10209f6}
        title={'Continue  '}
      />
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonb10209f6: {
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
      height: 58,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      textAlign: 'center',
    },
    Image42ee3e97: { height: 80, marginLeft: 20, width: 80 },
    Imagedea3f7c5: { height: 225, width: 250 },
    Text2cdf0b02: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
    },
    Text8e7040ba: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      marginTop: 8,
    },
    Textc014fbe5: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    Textc60db9a2: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      marginTop: 30,
    },
    View2c4fedbd: { alignItems: 'center', marginTop: 20 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View55977854: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    Viewbbf6a5ed: { justifyContent: 'space-around', marginLeft: 20 },
    Viewc75ebd41: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 2,
      borderRadius: 32,
      borderRightWidth: 2,
      borderTopWidth: 2,
      flexDirection: 'row',
      height: 110,
      marginTop: 20,
    },
    Viewfa66f54f: {
      alignItems: 'center',
      borderBottomWidth: 3,
      borderColor: theme.colors['Custom Color'],
      borderLeftWidth: 3,
      borderRadius: 32,
      borderRightWidth: 3,
      borderTopWidth: 3,
      flexDirection: 'row',
      height: 110,
      marginTop: 20,
    },
    Viewfbc072c8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(ForgotPasswordScreen);
