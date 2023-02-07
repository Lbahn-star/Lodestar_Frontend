import React from 'react';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import {
  Circle,
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MyRoomsoldassmfScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <LodestarMobileApi.FetchGetMyPrivateRoomsGET>
        {({ loading, error, data, refetchGetMyPrivateRooms }) => {
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
              <View style={styles(theme).Viewa725720a}>
                <Text
                  style={styles(theme).Text6a58993f}
                  adjustsFontSizeToFit={true}
                >
                  {'Rooms'}
                </Text>
                {/* Notifications */}
                <View style={styles(theme).View9e6af247}>
                  <View style={styles(theme).View51144c25}>
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('NotificationsScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <Circle bgColor={theme.colors['Background']} size={30}>
                        <Icon
                          size={24}
                          name={'Ionicons/notifications-outline'}
                          color={theme.colors['Text']}
                        />
                      </Circle>
                      {/* Red badge */}
                      <View style={styles(theme).View11e41515}>
                        <Circle
                          bgColor={theme.colors['Custom Color_8']}
                          size={9}
                        />
                      </View>
                    </Touchable>
                  </View>
                </View>
              </View>
              <FlatList
                data={fetchData?.content}
                listKey={'DkH4Zf5R'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('MyChannelScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View>
                          <View style={styles(theme).Viewce4accf0}>
                            <View style={styles(theme).View8e23439a}>
                              <Text style={styles(theme).Textdcaca2a5}>
                                {listData?.room_name}
                              </Text>

                              <Text
                                style={styles(theme).Text3833ae90}
                                ellipsizeMode={'tail'}
                                numberOfLines={2}
                              >
                                {listData?.about}
                              </Text>

                              <Text style={styles(theme).Textd4da9c2c}>
                                {'by '}
                                {listData?.owner}
                              </Text>
                            </View>

                            <View style={styles(theme).View59b1f5da}>
                              <Icon
                                name={'Feather/chevron-right'}
                                size={24}
                                color={theme.colors.light}
                              />
                            </View>
                          </View>
                        </View>
                        <View />
                      </Touchable>
                      <Spacer top={12} right={8} bottom={12} left={8} />
                    </>
                  );
                }}
                style={styles(theme).FlatList989db244}
                contentContainerStyle={styles(theme).FlatListb7ca1dbcContent}
                numColumns={1}
              />
            </>
          );
        }}
      </LodestarMobileApi.FetchGetMyPrivateRoomsGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListb7ca1dbcContent: {
      flex: 1,
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
    Text3833ae90: {
      color: theme.colors['Light'],
      fontFamily: 'System',
      fontWeight: '600',
      marginTop: 2,
    },
    Text6a58993f: {
      alignSelf: 'center',
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 18,
    },
    Textd4da9c2c: {
      color: theme.colors['Light'],
      fontFamily: 'System',
      fontWeight: '400',
      marginTop: 4,
    },
    Textdcaca2a5: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 25,
    },
    View11e41515: { position: 'absolute', right: 2, top: 2, zIndex: 2 },
    View51144c25: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: theme.colors['Background'],
      borderLeftWidth: 0.5,
      borderRadius: 17.5,
      borderRightWidth: 0.5,
      borderTopWidth: 0.5,
      height: 35,
      justifyContent: 'center',
      width: 35,
    },
    View59b1f5da: { marginLeft: 8 },
    View8e23439a: { flex: 1, marginLeft: 12 },
    View9e6af247: {
      alignItems: 'center',
      borderColor: theme.colors['Text'],
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewa725720a: {
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
  });

export default withTheme(MyRoomsoldassmfScreen);
