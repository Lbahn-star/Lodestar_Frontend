import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CalendarPermissionsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      {/* Header Wrapper */}
      <View style={styles(theme).View7739d1b9}>
        {/* Calendar Icon 140 140 */}
        <Image
          style={styles(theme).Imageb502b913}
          resizeMode={'contain'}
          source={Images.ScreenShot20211122At34913PM}
        />
      </View>
      {/* Content Wrapper */}
      <View style={styles(theme).View8906d4c2}>
        {/* Title  */}
        <Text style={styles(theme).Text07f0aeaf}>{'Enable Calendar'}</Text>
        {/* Text for Icon */}
        <Text style={styles(theme).Textec61ce64}>
          {'Let us help you keep everything in sync.'}
        </Text>
      </View>
      {/* Footer Wrapper */}
      <View style={styles(theme).View545158ff}>
        <Touchable>
          {/* Button Information */}
          <Text style={styles(theme).Text8e6be89a}>{'Skip'}</Text>
        </Touchable>
        {/* Button Solid */}
        <Button
          style={styles(theme).Button66518494}
          type={'solid'}
          color={theme.colors.null}
          title={'Enable Calendar'}
        >
          {'ENABLE CALENDAR'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button66518494: {
      borderRadius: 40,
      color: theme.colors['Custom Color'],
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      marginBottom: 40,
      marginTop: 18,
      textTransform: 'uppercase',
    },
    Imageb502b913: { height: 140, width: 140 },
    Text07f0aeaf: {
      color: theme.colors.strong,
      fontFamily: 'System',
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center',
    },
    Text8e6be89a: {
      color: theme.colors.light,
      textAlign: 'center',
      textTransform: 'uppercase',
      typography: theme.typography.button,
    },
    Textec61ce64: {
      color: theme.colors.strong,
      fontSize: 16,
      marginTop: 6,
      textAlign: 'center',
    },
    View545158ff: {
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'flex-end',
      marginLeft: 12,
      marginRight: 12,
      maxHeight: '33%',
    },
    View7739d1b9: {
      alignItems: 'center',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'flex-end',
      marginLeft: 12,
      marginRight: 12,
    },
    View8906d4c2: {
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      marginLeft: 12,
      marginRight: 12,
      minHeight: '15%',
    },
  });

export default withTheme(CalendarPermissionsScreen);
