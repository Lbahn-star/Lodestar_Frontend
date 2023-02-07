import React from 'react';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const WelcomescreenScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <Touchable
        onPress={() => {
          try {
            navigation.navigate('SignupScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View style={styles(theme).Viewd9506a4c}>
          {/* Title */}
          <Text style={styles(theme).Text56149cfd} ellipsizeMode={'head'}>
            {'Lodestar'}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Text56149cfd: {
      alignSelf: 'center',
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_800ExtraBold',
      fontSize: 53,
      marginTop: 200,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 0,
      textAlign: 'center',
    },
    Viewd9506a4c: {
      alignContent: 'stretch',
      alignSelf: 'stretch',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      height: 750,
    },
    screen: {
      alignContent: 'stretch',
      backgroundColor: theme.colors['Custom Color_40'],
    },
  });

export default withTheme(WelcomescreenScreen);
