import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Button,
  CircleImage,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const VoicecallDetailScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const HumanReadableDate = time => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules
    return new Date(time).toLocaleString();
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasTopSafeArea={false}
      scrollable={true}
      hasSafeArea={true}
    >
      {/* Header Wrapper */}
      <View style={styles(theme).View5402ff7a}>
        {/* Meeting Image - Goes Here */}
        <ImageBackground
          style={styles(theme).ImageBackground9a3a7977}
          source={Images.DALLE20230127005431}
          backfaceVisibility={'visible'}
          resizeMode={'cover'}
        >
          <IconButton
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).IconButton0ac449e0}
            size={32}
            icon={'Ionicons/arrow-back-sharp'}
            color={theme.colors['Background']}
          />
        </ImageBackground>
      </View>
      {/* Content Wrapper */}
      <View style={styles(theme).Viewcd2d5486}>
        {/* Meeting Name ~ */}
        <Text style={styles(theme).Textfb2fd5b1}>{'Meeting'}</Text>
        {/* Meeting Description ~ */}
        <Text style={styles(theme).Text6c69066f}>
          {
            'Round table to discuss the creation and management of the authentication capability. '
          }
        </Text>
        {/* Details ~ */}
        <Text style={styles(theme).Text97b1e14f}>{'DETAILS'}</Text>
        {/* Surface 3 Elevation */}
        <Surface style={styles(theme).Surfacecd8d9c9c} elevation={3}>
          {/* Meeting Platform */}
          <View style={styles(theme).Viewf75e4fe7}>
            {/* Icon */}
            <View>
              {/* Calendar Icon */}
              <Icon
                name={'Entypo/calendar'}
                color={theme.colors.strong}
                size={12}
              />
            </View>
            {/* Meeting Platform ~ */}
            <Text style={styles(theme).Text8e5aa74a}>{'Zoom or Teams'}</Text>
          </View>
          {/* Meeting Time */}
          <View style={styles(theme).Viewe9fa59a5}>
            {/* Icon */}
            <View>
              {/* Calendar Icon */}
              <Icon
                name={'Entypo/calendar'}
                color={theme.colors.strong}
                size={12}
              />
            </View>
            {/* Meeting Date ~ */}
            <Text style={styles(theme).Text308266ef}>{'09/11/2023'}</Text>
          </View>
        </Surface>
        {/* Time */}
        <Text style={styles(theme).Text97b1e14f}>{'Time'}</Text>
        {/* Surface 3 */}
        <Surface style={styles(theme).Surfaceb2f74c94} elevation={3}>
          {/* Description Agenda ~ */}
          <Text style={styles(theme).Text47cbbfb3}>{'5:00 PM EST'}</Text>
        </Surface>
        {/* Organized By Title */}
        <Text style={styles(theme).Text97b1e14f}>{'Organized By'}</Text>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('ProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Touchable1a5d390f}
        >
          {/* Surface 3 Elevation */}
          <Surface style={styles(theme).Surface2e3bfffe} elevation={3}>
            {/* Organiser Details */}
            <View style={styles(theme).Viewdfc7dfab}>
              {/* Employee Image */}
              <CircleImage
                source={Images.ViniciusWiesehoferUOavPZ38lEUnsplash}
                size={50}
              />
              {/* Employee Info Wrapper */}
              <View style={styles(theme).Viewd470c8a8}>
                {/* User Name ~ */}
                <Text style={styles(theme).Text1163de2f}>
                  {'Ethan Browning'}
                </Text>
                {/* Job Title ~ */}
                <Text style={styles(theme).Text22378428}>
                  {'Technical Project Manager'}
                </Text>
              </View>
              {/* Detail discloser */}
              <View style={styles(theme).View6a955cc3}>
                {/* Forward Icon */}
                <Icon
                  name={'MaterialIcons/arrow-forward-ios'}
                  size={15}
                  color={theme.colors.peoplebitStoneGray}
                />
              </View>
            </View>
          </Surface>
        </Touchable>
      </View>
      {/* Footer Wrapper */}
      <View style={styles(theme).View50e269cd}>
        {/* View Event Button */}
        <Button style={styles(theme).Button819b8697} title={'Cancel Event'}>
          {'Sign Up'}
        </Button>
        {/* Join Event Button */}
        <Button
          onPress={() => {
            try {
              navigation.navigate('GoLiveScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles(theme).Button7691e51b}
          title={'Join Event'}
        >
          {'Sign Up'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button7691e51b: {
      backgroundColor: theme.colors['Text'],
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderRadius: 4,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      fontFamily: 'OpenSans_500Medium',
      fontSize: 14,
      height: 45,
      maxHeight: 50,
      minHeight: 30,
      textAlign: 'center',
      width: '45%',
    },
    Button819b8697: {
      backgroundColor: theme.colors.background,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomWidth: 1,
      borderColor: theme.colors.peoplebitLightGray,
      borderLeftWidth: 1,
      borderRadius: 4,
      borderRightWidth: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderTopWidth: 1,
      color: theme.colors.peoplebitDarkEmeraldGreen,
      fontFamily: 'OpenSans_500Medium',
      fontSize: 14,
      height: 45,
      maxHeight: 50,
      minHeight: 30,
      textAlign: 'center',
      width: '45%',
    },
    IconButton0ac449e0: { marginLeft: 10, marginTop: 10 },
    ImageBackground9a3a7977: {
      alignContent: 'center',
      backgroundColor: theme.colors['Community_Modal_Opacity_Clear'],
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flexWrap: 'nowrap',
      height: '100%',
      width: '100%',
    },
    Surface2e3bfffe: {
      backgroundColor: theme.colors.background,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderRadius: 3,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 65,
      justifyContent: 'center',
      minHeight: 54,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
    },
    Surfaceb2f74c94: {
      backgroundColor: theme.colors.background,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderRadius: 4,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    Surfacecd8d9c9c: {
      backgroundColor: theme.colors.background,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderRadius: 4,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
    },
    Text1163de2f: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 15,
    },
    Text22378428: {
      color: theme.colors.peopleBitLightBrown,
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      marginTop: 2,
    },
    Text308266ef: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'OpenSans_500Medium',
      fontSize: 11,
      paddingLeft: 9,
    },
    Text47cbbfb3: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      letterSpacing: 1,
    },
    Text6c69066f: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      marginTop: 2,
      textAlign: 'left',
    },
    Text8e5aa74a: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 11,
      paddingLeft: 9,
    },
    Text97b1e14f: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 9,
      letterSpacing: 2,
      marginBottom: 6,
      marginTop: 15,
      textTransform: 'uppercase',
    },
    Textfb2fd5b1: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 27,
      marginTop: 12,
      textAlign: 'left',
    },
    Touchable1a5d390f: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    View50e269cd: {
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'space-evenly',
      marginBottom: 16,
      maxHeight: 54,
      minWidth: 124,
      paddingBottom: 12,
      paddingTop: 12,
    },
    View5402ff7a: {
      backgroundColor: theme.colors.background,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      flexGrow: 0,
      flexShrink: 0,
      height: 220,
      minHeight: 150,
    },
    View6a955cc3: { justifyContent: 'center' },
    Viewcd2d5486: {
      flexGrow: 1,
      flexShrink: 0,
      paddingLeft: 12,
      paddingRight: 12,
    },
    Viewd470c8a8: { flexGrow: 1, flexShrink: 0, marginTop: 5, paddingLeft: 9 },
    Viewdfc7dfab: { borderRadius: 4, flexDirection: 'row' },
    Viewe9fa59a5: { flexDirection: 'row', marginTop: 3, paddingBottom: 3 },
    Viewf75e4fe7: { flexDirection: 'row', paddingBottom: 3 },
    screen: { backgroundColor: theme.colors['Custom Color_40'] },
  });

export default withTheme(VoicecallDetailScreen);
