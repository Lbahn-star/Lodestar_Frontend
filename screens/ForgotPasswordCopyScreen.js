import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const ForgotPasswordCopyScreen = props => {
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).View4762dfc8}>
        {/* Back */}
        <View style={styles(theme).View53f79c36}>
          <Touchable>
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Textee3b3f07}>{'Forgot Password'}</Text>
        {/* Blank */}
        <View style={styles(theme).View53f79c36} />
      </View>

      <View style={styles(theme).View800b115c}>
        {/* Heading */}
        <Text style={styles(theme).Text7029d8f0}>{'Forgot\nPassword?'}</Text>
        {/* sub heading */}
        <Text style={styles(theme).Texta68ec393}>
          {
            'Please enter your email address and we will send your password by email.'
          }
        </Text>
        {/* Email */}
        <TextInput
          onChangeText={newEmailValue => {
            try {
              setTextInputValue(newEmailValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).TextInputc04de81c}
          value={textInputValue}
          placeholder={'Email'}
          editable={true}
          placeholderTextColor={theme.colors['Light']}
        />
        {/* Send */}
        <Button style={styles(theme).Button0b4a0e20} title={'Send'} />
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button0b4a0e20: {
      backgroundColor: theme.colors['Custom Color_5'],
      borderRadius: 24,
      color: theme.colors['Custom Color_4'],
      fontFamily: 'Poppins_500Medium',
      fontSize: 17,
      height: 46,
      marginTop: 40,
      textAlign: 'center',
    },
    Text7029d8f0: {
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Poppins_700Bold',
      fontSize: 35,
      marginBottom: 10,
    },
    TextInputc04de81c: {
      backgroundColor: theme.colors['Custom Color_3'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
      height: 48,
      marginTop: 20,
      paddingBottom: 8,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 8,
    },
    Texta68ec393: {
      color: theme.colors['Custom Color_9'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
      opacity: 0.7,
      paddingBottom: 10,
      textAlign: 'left',
    },
    Textee3b3f07: {
      color: theme.colors.strong,
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
    },
    View4762dfc8: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View800b115c: {
      justifyContent: 'space-evenly',
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 20,
    },
  });

export default withTheme(ForgotPasswordCopyScreen);
