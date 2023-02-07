import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const CameraPermissionsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      {/* Header Wrapper */}
      <View style={styles(theme).View7739d1b9}>
        {/* Calendar Icon 140 140 */}
        <Image
          style={styles(theme).Imageb502b913}
          resizeMode={'contain'}
          source={Images.ScreenShot20211122At33505PM}
        />
      </View>
      {/* Content Wrapper */}
      <View style={styles(theme).View8906d4c2}>
        {/* Title  */}
        <Text style={styles(theme).Text07f0aeaf}>{'Enable Camera'}</Text>
        {/* Text for Icon */}
        <Text style={styles(theme).Text9c444355}>
          {
            "We'll need this for taking photos, accessing the camera roll, or recording video."
          }
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
          style={styles(theme).Buttonb0f2dd9e}
          type={'solid'}
          color={theme.colors.null}
          title={'ENABLE CAMERA '}
        >
          {'ENABLE CAMERA'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonb0f2dd9e: {
      borderRadius: 40,
      fontFamily: 'Inter_500Medium',
      fontSize: 15,
      marginBottom: 40,
      marginTop: 18,
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
    Text9c444355: {
      color: theme.colors.strong,
      fontSize: 16,
      lineHeight: 24,
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

export default withTheme(CameraPermissionsScreen);
