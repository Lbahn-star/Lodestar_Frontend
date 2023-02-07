import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const EditChannelProfileScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
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
        <Text style={styles(theme).Textc014fbe5}>{'Edit Channel Profile'}</Text>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollViewbf1f9796Content
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* About */}
        <View style={styles(theme).View35bcb2cc}>
          {/* Header */}
          <Text style={styles(theme).Text55c9dff3}>{'About'}</Text>
          {/* Username */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Username'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'AndrewAinsley'}
            />
          </View>
          {/* Display Name */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Display Name'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'AndrewAinsley'}
            />
          </View>
          {/* Bio */}
          <View style={styles(theme).View19592766}>
            <Text style={styles(theme).Text9544cde1}>{'Bio'}</Text>
            <TextInput
              style={styles(theme).TextInput5da76cea}
              editable={true}
              placeholder={'Enter a value...'}
              numberOfLines={4}
              multiline={true}
              defaultValue={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
              }
            />
          </View>
        </View>
        {/* Social Links */}
        <View style={styles(theme).Viewd4cbd86d}>
          {/* Header */}
          <Text style={styles(theme).Text55c9dff3}>{'SOCIAL LINKS'}</Text>
          {/* Discord */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Discord'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://discord.gg/AndrewAinsley'}
            />
          </View>
          {/* Youtube */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'YouTube'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://youtube.com/channel/AndrewAinsley'}
            />
          </View>
          {/* Twitter */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Twitter'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://twitter.com/AndrewAinsley'}
            />
          </View>
          {/* Instagram */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Instagram'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://instagram.com/AndrewAinsley'}
            />
          </View>
          {/* Facebook */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Facebook'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://facebook.com/AndrewAinsley'}
            />
          </View>
          {/* Telegram */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Telegram'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://t.me/AndrewAinsley'}
            />
          </View>
          {/* LinkedIn */}
          <View style={styles(theme).View0304f6b2}>
            <Text style={styles(theme).Text9544cde1}>{'Linkedin'}</Text>
            <TextInput
              style={styles(theme).TextInputa401dbcc}
              editable={true}
              placeholder={'Enter a value...'}
              defaultValue={'https://discord.gg/AndrewAinsley'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    KeyboardAwareScrollViewbf1f9796Content: {
      marginTop: 15,
      paddingBottom: 15,
    },
    Text55c9dff3: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
      marginBottom: 20,
      marginLeft: 20,
      opacity: 0.7,
    },
    Text9544cde1: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 15,
    },
    TextInput5da76cea: {
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      fontFamily: 'Inter_400Regular',
      lineHeight: 20,
      marginTop: 12,
      paddingBottom: 12,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 12,
    },
    TextInputa401dbcc: {
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 56,
      marginTop: 12,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textc014fbe5: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    View0304f6b2: { marginBottom: 20, marginLeft: 20, marginRight: 20 },
    View19592766: {
      flex: 1,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
    },
    View35bcb2cc: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewd4cbd86d: { paddingTop: 20 },
    Viewfbc072c8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export default withTheme(EditChannelProfileScreen);
