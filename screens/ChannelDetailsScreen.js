import React from 'react';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ChannelDetailsScreen = props => {
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
      <LodestarMobileApi.FetchGetRoomInfoGET
        room_pk={props.route?.params?.pk ?? ''}
      >
        {({ loading, error, data, refetchGetRoomInfo }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
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
                        color={theme.colors['Text']}
                      />
                    </Touchable>
                  </View>
                </View>
              </View>
              {/* Container */}
              <ScrollView
                style={styles(theme).ScrollView989db244}
                contentContainerStyle={styles(theme).ScrollViewc2342071Content}
                showsVerticalScrollIndicator={true}
                bounces={true}
              >
                {/* Banner */}
                <View>
                  {/* Banner */}
                  <Image
                    style={styles(theme).Imageebdba962}
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
                <View style={styles(theme).View94c38863}>
                  <View style={styles(theme).View96b91ccf}>
                    <View style={styles(theme).Viewce4accf0}>
                      {/* Name */}
                      <Text style={styles(theme).Textd6e83319}>
                        {fetchData?.room_name}
                      </Text>
                      <Icon
                        style={styles(theme).Icon26942535}
                        size={24}
                        name={'MaterialIcons/verified'}
                        color={theme.colors['Text']}
                      />
                    </View>
                    {/* Streaming */}
                    <Text style={styles(theme).Text67d9249f}>
                      {'Streaming: '}
                      {/* Game */}
                      <Text style={styles(theme).Text47a10947}>
                        {fetchData?.topic}
                      </Text>
                    </Text>

                    <Text style={styles(theme).Text4600618d}>
                      {'Owner'}
                      {/* Followers */}
                      <Text style={styles(theme).Textf0fe98eb}>
                        {': '}
                        {fetchData?.owner}
                      </Text>
                    </Text>
                  </View>
                </View>
                {/* About */}
                <Text style={styles(theme).Text28035bec}>
                  {fetchData?.about}
                </Text>
                {/* Actions */}
                <View style={styles(theme).Viewf4cdda11}>
                  {/* Subscribe */}
                  <Button
                    onPress={() => {
                      try {
                        navigation.navigate('AudioCallStartScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={styles(theme).Buttona945afba}
                    title={'Enter'}
                  />
                </View>
              </ScrollView>
            </>
          );
        }}
      </LodestarMobileApi.FetchGetRoomInfoGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttona945afba: {
      backgroundColor: theme.colors['Text'],
      borderRadius: 100,
      fontFamily: 'OpenSans_500Medium',
      fontSize: 16,
      textAlign: 'center',
      width: '48%',
    },
    Fetch431eb058: { minHeight: 40 },
    Icon26942535: { marginLeft: 5 },
    Imageebdba962: { borderRadius: 20, height: 140 },
    ScrollViewc2342071Content: {
      flexWrap: 'nowrap',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    Text28035bec: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_400Regular',
      lineHeight: 21,
      marginTop: 5,
    },
    Text4600618d: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_400Regular',
      fontSize: 14,
      marginTop: 5,
      opacity: 0.8,
    },
    Text47a10947: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_400Regular',
      fontSize: 14,
      opacity: 0.8,
    },
    Text67d9249f: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_500Medium',
      fontSize: 14,
      marginTop: 7,
    },
    Textd6e83319: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 18,
    },
    Textf0fe98eb: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_500Medium',
      fontSize: 14,
      marginTop: 10,
    },
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
    View94c38863: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingTop: 10,
    },
    View96b91ccf: {
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
      flex: 1,
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
    Viewf4cdda11: {
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
      paddingBottom: 6,
      paddingTop: 6,
    },
    screen: { backgroundColor: theme.colors['Custom Color_40'] },
  });

export default withTheme(ChannelDetailsScreen);
