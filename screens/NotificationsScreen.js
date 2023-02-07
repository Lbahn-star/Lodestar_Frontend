import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import {
  Circle,
  Icon,
  LinearGradient,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const NotificationsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [title, setTitle] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).View4762dfc8}>
        {/* Back */}
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
              name={'AntDesign/arrowleft'}
              color={theme.colors['Text']}
            />
          </Touchable>
        </View>
        {/* Screen Heading */}
        <Text style={styles(theme).Text78b52b4e}>{'Notifications'}</Text>
        {/* Blank */}
        <View style={styles(theme).View53f79c36} />
      </View>
      {/* Notifications */}
      <View style={styles(theme).View5942f196} />
      {/* Match Requests */}
      <View style={styles(theme).Viewa7622e42}>
        {/* Section header */}
        <Text style={styles(theme).Text55403512}>{'Invites'}</Text>

        <DraftbitExampleDataApi.FetchUsersGET limit={2}>
          {({ loading, error, data, refetchUsers }) => {
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
              <FlatList
                data={fetchData}
                listKey={'ylOyvcpc'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles(theme).View60e6d34c}>
                      {/* Image */}
                      <Circle
                        size={50}
                        bgColor={theme.colors['Custom Color_2']}
                      >
                        <Image
                          style={styles(theme).Image8dbb3d0d}
                          resizeMode={'center'}
                          source={{ uri: `${listData?.avatar}` }}
                        />
                      </Circle>

                      <View style={styles(theme).Viewe6858e5e}>
                        {/* Title ~ */}
                        <Text
                          style={styles(theme).Text947182a0}
                          numberOfLines={2}
                        >
                          {listData?.fullName}
                        </Text>
                        {/* Request ~ */}
                        <Text
                          style={styles(theme).Text61d63cfd}
                          numberOfLines={2}
                        >
                          {'Send you Request'}
                        </Text>
                      </View>

                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('InviteScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles(theme).Touchable1f5a2b5d}
                      >
                        {/* Accept  */}
                        <View style={styles(theme).View21a5f924}>
                          <LinearGradient
                            style={styles(theme).LinearGradientaa9aa6b7}
                            endX={100}
                            endY={100}
                            startY={50}
                            startX={50}
                            color2={theme.colors['Text']}
                            color1={theme.colors['Text']}
                          >
                            <Text style={styles(theme).Text1183b42c}>
                              {'View'}
                            </Text>
                          </LinearGradient>
                        </View>
                      </Touchable>
                    </View>
                  );
                }}
                style={styles(theme).FlatList989db244}
                contentContainerStyle={styles(theme).FlatList55977854Content}
                numColumns={1}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatList55977854Content: { flex: 1, paddingLeft: 20, paddingRight: 20 },
    Image8dbb3d0d: { height: 50, width: 50 },
    LinearGradientaa9aa6b7: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: '100%',
      justifyContent: 'center',
      width: '100%',
    },
    Text1183b42c: {
      alignSelf: 'center',
      color: theme.colors['Custom Color_40'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      textAlign: 'center',
    },
    Text55403512: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 15,
      marginBottom: 20,
      marginLeft: 20,
    },
    Text61d63cfd: {
      color: theme.colors['Light'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      marginLeft: 12,
      opacity: 1,
    },
    Text78b52b4e: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 15,
    },
    Text947182a0: {
      color: theme.colors['Strong'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 15,
      lineHeight: 20,
      marginBottom: 4,
      marginLeft: 12,
    },
    Touchable1f5a2b5d: { borderColor: '"rgba(0, 0, 0, 0)"' },
    View21a5f924: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color'],
      borderColor: theme.colors['BG Gray'],
      borderRadius: 12.5,
      height: 25,
      justifyContent: 'center',
      width: 56,
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
    View5942f196: { marginLeft: 20, marginRight: 20 },
    View60e6d34c: {
      alignItems: 'center',
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      flexDirection: 'row',
      paddingBottom: 10,
      paddingTop: 10,
    },
    Viewa7622e42: { flex: 1, marginTop: 20 },
    Viewe6858e5e: { flex: 1, paddingTop: 4 },
    screen: { backgroundColor: theme.colors['Custom Color_40'] },
  });

export default withTheme(NotificationsScreen);
