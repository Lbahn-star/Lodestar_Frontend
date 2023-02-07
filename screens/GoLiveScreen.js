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

const GoLiveScreen = props => {
  const { theme } = props;
  const { navigation } = props;

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
        <Text style={styles(theme).Textc014fbe5}>{'Go Live'}</Text>
      </View>

      <View>
        <View style={styles(theme).Viewfa93b98a}>
          {/* Image */}
          <View style={styles(theme).View39912261}>
            <Image
              style={styles(theme).Image20bca6ef}
              resizeMode={'cover'}
              source={Images.GoLive}
            />
          </View>
          {/* Go Live Now! */}
          <Text style={styles(theme).Text0d612217}>{'Go Live Now!'}</Text>
          {/* Description */}
          <Text style={styles(theme).Text292f6aaa}>
            {'Always remember to follow '}
            {/* Go Live Now! */}
            <Text style={styles(theme).Textc2dd4cac}>
              {'Streamo Community Guidelines: '}
            </Text>
            {/* Go Live Now! */}
            <Text style={styles(theme).Textce7a6273}>
              {
                'illegal activities, violence, harrashment, hate speech, gore, sex, and nudity are inappropriate.'
              }
            </Text>
          </Text>
          {/* IRL */}
          <Touchable style={styles(theme).Touchable1d2d2f66}>
            <Button
              onPress={() => {
                try {
                  navigation.navigate('AudioCallStartScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Button8ce897e6}
              title={'Get Started'}
            />
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button8ce897e6: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    Image20bca6ef: { height: 147, width: 245 },
    Text0d612217: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 28,
      marginTop: 35,
      opacity: 0.8,
      textAlign: 'center',
    },
    Text292f6aaa: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      lineHeight: 21,
      marginLeft: 25,
      marginRight: 25,
      marginTop: 20,
      opacity: 0.8,
      textAlign: 'center',
    },
    Textc014fbe5: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    Textc2dd4cac: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      marginTop: 35,
      opacity: 1,
    },
    Textce7a6273: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      marginTop: 35,
      opacity: 0.8,
    },
    Touchable1d2d2f66: { marginLeft: 20, marginRight: 20, marginTop: 20 },
    View39912261: { alignItems: 'center' },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewfa93b98a: { marginTop: 40 },
    Viewfbc072c8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export default withTheme(GoLiveScreen);
