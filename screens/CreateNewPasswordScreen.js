import React from 'react';
import Images from '../config/Images';
import {
  Button,
  CheckboxRow,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreateNewPasswordScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [SuccessModal, setSuccessModal] = React.useState(false);
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

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
        <Text style={styles(theme).Textc014fbe5}>{'Create New Password'}</Text>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollViewc992f941Content
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Container */}
        <View style={styles(theme).View55977854}>
          {/* Artwork */}
          <View style={styles(theme).View2c4fedbd}>
            <Image
              style={styles(theme).Imagef25c4af9}
              resizeMode={'cover'}
              source={Images.CNP}
            />
          </View>

          <Text style={styles(theme).Text4f07d98c}>
            {'Create Your New Password'}
          </Text>
          {/* Password */}
          <View style={styles(theme).View8b8ba960}>
            <Icon
              style={styles(theme).Iconea2f310a}
              name={'MaterialCommunityIcons/lock'}
              size={20}
            />
            <View style={styles(theme).View98e46257}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput93b38893}
                value={textInputValue}
                placeholder={'Password'}
                editable={true}
                secureTextEntry={true}
              />
            </View>
            <Icon
              style={styles(theme).Iconea2f310a}
              size={20}
              name={'Ionicons/ios-eye-off-sharp'}
            />
          </View>
          {/* Confirm Password */}
          <View style={styles(theme).View8b8ba960}>
            <Icon
              style={styles(theme).Iconea2f310a}
              name={'MaterialCommunityIcons/lock'}
              size={20}
            />
            <View style={styles(theme).View98e46257}>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput93b38893}
                placeholder={'Confirm Password'}
                editable={true}
                secureTextEntry={true}
              />
            </View>
            <Icon
              style={styles(theme).Iconea2f310a}
              size={20}
              name={'Ionicons/ios-eye-off-sharp'}
            />
          </View>
          {/* Remember me */}
          <View style={styles(theme).Viewb1e1c99c}>
            <View style={styles(theme).Viewfd94cf54}>
              <CheckboxRow
                onPress={newCheckboxRowValue => {
                  try {
                    setCheckboxRowValue(newCheckboxRowValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).CheckboxRow60166d70}
                label={'Remember me'}
                value={checkboxRowValue}
                direction={'row-reverse'}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* Continue */}
      <Button
        onPress={() => {
          try {
            setSuccessModal(true);
            navigation.navigate('SigninScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={styles(theme).Button6f8e35f2}
        title={'Continue '}
      />
      {/* Success Modal */}
      <>
        {!SuccessModal ? null : (
          <Modal
            transparent={true}
            animationType={'fade'}
            presentationStyle={'overFullScreen'}
          >
            <View style={styles(theme).View721c4f02} />
            <View style={styles(theme).Viewbf78ff24}>
              <View style={styles(theme).View28b55ac4}>
                <Image
                  style={styles(theme).Imaged9cb7988}
                  resizeMode={'cover'}
                  source={Images.Successpopup}
                />
                {/* Title */}
                <Text style={styles(theme).Text1b3d3169}>{'Successful!'}</Text>
                {/* Desctiption */}
                <Text style={styles(theme).Text7930eca2}>
                  {
                    'Please wait a moment, we are looking for a suitable recommendation for you...'
                  }
                </Text>
                {/* Next */}
                <Button
                  onPress={() => {
                    try {
                      setSuccessModal(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).Button0373e2b0}
                  title={'Next -->'}
                />
              </View>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button0373e2b0: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginTop: 25,
      paddingLeft: 60,
      paddingRight: 60,
      textAlign: 'center',
    },
    Button6f8e35f2: {
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      height: 58,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      textAlign: 'center',
    },
    CheckboxRow60166d70: { minHeight: 50 },
    Iconea2f310a: { opacity: 0.6 },
    Imaged9cb7988: { height: 180, width: 185 },
    Imagef25c4af9: { height: 271, width: 380 },
    KeyboardAwareScrollViewc992f941Content: { flex: 1 },
    Text1b3d3169: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 24,
      marginTop: 25,
    },
    Text4f07d98c: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      marginTop: 20,
      opacity: 0.8,
      textAlign: 'left',
    },
    Text7930eca2: {
      color: theme.colors.strong,
      fontFamily: 'Inter_300Light',
      fontSize: 18,
      lineHeight: 24,
      marginLeft: 15,
      marginRight: 15,
      marginTop: 16,
      textAlign: 'center',
    },
    TextInput93b38893: {
      borderRadius: 8,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textc014fbe5: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    View28b55ac4: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom #ffffff'],
      borderRadius: 52,
      height: 487,
      marginLeft: 35,
      marginRight: 35,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 40,
    },
    View2c4fedbd: { alignItems: 'center', marginTop: 20 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View55977854: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    View721c4f02: {
      backgroundColor: theme.colors['Custom Color_22'],
      bottom: 0,
      flex: 1,
      left: 0,
      opacity: 0.6,
      position: 'absolute',
      right: 0,
      top: 0,
    },
    View8b8ba960: {
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
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    View98e46257: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
    },
    Viewb1e1c99c: { alignItems: 'center', marginTop: 15 },
    Viewbf78ff24: { alignItems: 'center', flex: 1, justifyContent: 'center' },
    Viewfbc072c8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewfd94cf54: { width: 170 },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(CreateNewPasswordScreen);
