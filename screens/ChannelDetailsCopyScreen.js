import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ChannelDetailsCopyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [optionsMenu, setOptionsMenu] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('home');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).View5d4d572f}>
        {/* Left View */}
        <View style={styles(theme).Viewce4accf0}>
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
        </View>
      </View>
      {/* Container */}
      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView2c056770Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Banner */}
        <View>
          {/* Banner */}
          <Image
            style={styles(theme).Imageb6b6c138}
            resizeMode={'cover'}
            source={Images.ChannelBanner}
          />
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await Utils.openImagePicker({});
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View style={styles(theme).Viewb38ad9ad}>
              <Icon
                size={24}
                name={'MaterialIcons/edit'}
                color={theme.colors['Custom #ffffff']}
              />
            </View>
          </Touchable>
        </View>
        {/* Channel Details */}
        <View style={styles(theme).View9984a456}>
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await Utils.openImagePicker({});
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View>
              <Image
                style={styles(theme).Image115e9468}
                source={Images.ChannelDP}
                resizeMode={'center'}
              />
            </View>
          </Touchable>

          <View style={styles(theme).View31b5c7f0}>
            <View style={styles(theme).Viewce4accf0}>
              {/* Name */}
              <Text style={styles(theme).Text830c579f}>
                {'Meta Software Engineers'}
              </Text>
              <Icon
                style={styles(theme).Icon65bacc84}
                size={24}
                name={'MaterialIcons/verified'}
                color={theme.colors['Custom Color']}
              />
            </View>
            {/* Streaming */}
            <Text style={styles(theme).Text8ffce31b}>
              {'Streaming: '}
              {/* Game */}
              <Text style={styles(theme).Textf7ae6762}>{'Tech Talk'}</Text>
            </Text>
            {/* Followers */}
            <Text style={styles(theme).Text8791cea4}>
              {'265'}
              {/* Followers */}
              <Text style={styles(theme).Text3c936f28}>{'Members'}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* Container */}
      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView2c056770Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Banner */}
        <View>
          {/* Banner */}
          <Image
            style={styles(theme).Imageb6b6c138}
            resizeMode={'cover'}
            source={Images.ChannelBanner}
          />
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await Utils.openImagePicker({});
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View style={styles(theme).Viewb38ad9ad}>
              <Icon
                size={24}
                name={'MaterialIcons/edit'}
                color={theme.colors['Custom #ffffff']}
              />
            </View>
          </Touchable>
        </View>
        {/* Channel Details */}
        <View style={styles(theme).Viewaf1f466d}>
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await Utils.openImagePicker({});
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
          >
            <View>
              <Image
                style={styles(theme).Image8edd213f}
                source={Images.ChannelDP}
                resizeMode={'center'}
              />
            </View>
          </Touchable>

          <View style={styles(theme).View31b5c7f0}>
            <View style={styles(theme).Viewce4accf0}>
              {/* Name */}
              <Text style={styles(theme).Text830c579f}>
                {'Meta Software Engineers'}
              </Text>
              <Icon
                style={styles(theme).Icon65bacc84}
                size={24}
                name={'MaterialIcons/verified'}
                color={theme.colors['Custom Color']}
              />
            </View>
            {/* Streaming */}
            <Text style={styles(theme).Text8ffce31b}>
              {'Streaming: '}
              {/* Game */}
              <Text style={styles(theme).Textf7ae6762}>{'Tech Talk'}</Text>
            </Text>
            {/* Followers */}
            <Text style={styles(theme).Text8791cea4}>
              {'265'}
              {/* Followers */}
              <Text style={styles(theme).Text3c936f28}>{'Members'}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Icon65bacc84: { marginRight: 20 },
    Image115e9468: { height: 100, width: 100 },
    Image8edd213f: { height: 108, width: 108 },
    Imageb6b6c138: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderRadius: 20,
      height: 140,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    },
    ScrollView2c056770Content: { flexWrap: 'nowrap' },
    Text3c936f28: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 5,
      opacity: 0.8,
    },
    Text830c579f: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      marginRight: 20,
    },
    Text8791cea4: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      marginTop: 10,
    },
    Text8ffce31b: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 14,
      marginTop: 7,
    },
    Textf7ae6762: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      opacity: 0.8,
    },
    View31b5c7f0: { flex: 1, paddingLeft: 16 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View5d4d572f: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View9984a456: {
      alignItems: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: theme.colors['Custom Color'],
      borderWidth: 1,
      flexDirection: 'row',
      marginLeft: 10,
      marginRight: 10,
    },
    Viewaf1f466d: {
      alignItems: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: '"rgba(0, 0, 0, 0)"',
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderWidth: 1,
      flexDirection: 'row',
    },
    Viewb38ad9ad: {
      alignItems: 'center',
      bottom: 5,
      height: 48,
      justifyContent: 'center',
      position: 'absolute',
      right: 5,
      width: 48,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    screen: { borderWidth: 0.5 },
  });

export default withTheme(ChannelDetailsCopyScreen);
