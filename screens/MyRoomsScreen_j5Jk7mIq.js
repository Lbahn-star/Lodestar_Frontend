import React from 'react';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import formatCurrency from '../global-functions/formatCurrency';
import {
  Circle,
  Icon,
  ScreenContainer,
  Spacer,
  Surface,
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

const MyRoomsScreen_j5Jk7mIq = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const formatCurrency = value => {
    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return formatter.format(value);
  };

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={styles(theme).Viewfad6867a}>
        {/* Screen Heading */}
        <Text style={styles(theme).Text386c7773}>{'Rooms'}</Text>
        {/* Search */}
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
            <Circle size={50}>
              <Icon
                size={24}
                name={'Feather/search'}
                color={theme.colors['Text']}
              />
            </Circle>
          </Touchable>
        </View>
      </View>

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
            <FlatList
              data={fetchData?.content}
              listKey={'Evq1CvzQ'}
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
                          navigation.navigate('ChannelDetailsScreen', {
                            pk: listData?.pk,
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).Touchable9fcf7743}
                    >
                      <Surface
                        style={styles(theme).Surfacef385f602}
                        elevation={3}
                      >
                        <View style={styles(theme).Viewce4accf0}>
                          <View style={styles(theme).Viewc992f941}>
                            <Text
                              style={styles(theme).Textf81fde6f}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                            >
                              {listData?.topic}
                            </Text>
                            <Spacer top={3} right={8} left={8} bottom={3} />
                            <Text
                              style={styles(theme).Textdf21c20e}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                            >
                              {listData?.room_name}
                            </Text>

                            <Text
                              style={styles(theme).Text51509484}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}
                            >
                              {listData?.about}
                            </Text>
                          </View>

                          <View style={styles(theme).Viewfd6a5058}>
                            <Image
                              style={styles(theme).Imagea68e80df}
                              source={{ uri: `${listData?.image_thumb}` }}
                              resizeMode={'cover'}
                            />
                          </View>
                        </View>
                        <Spacer right={8} bottom={6} left={8} top={6} />
                        <View style={styles(theme).View4762dfc8}>
                          <View style={styles(theme).Viewce4accf0}>
                            <Icon
                              name={'Feather/user'}
                              size={18}
                              color={theme.colors['Text']}
                            />
                            <Text style={styles(theme).Textec7a22b1}>
                              {listData?.owner}
                            </Text>
                          </View>

                          <View style={styles(theme).Viewce4accf0}>
                            <Icon
                              name={'Feather/activity'}
                              size={20}
                              color={theme.colors['Text']}
                            />
                            <Text style={styles(theme).Text7941b3e9}>
                              {'Pending'}
                            </Text>
                          </View>
                        </View>
                      </Surface>
                    </Touchable>
                    <Spacer right={8} bottom={12} left={8} top={12} />
                  </>
                );
              }}
              style={styles(theme).FlatList989db244}
              contentContainerStyle={styles(theme).FlatList291ac3f1Content}
              numColumns={1}
            />
          );
        }}
      </LodestarMobileApi.FetchGetMyPrivateRoomsGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatList291ac3f1Content: {
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
    Imagea68e80df: { height: 80, width: 80 },
    Surfacef385f602: {
      backgroundColor: theme.colors['Background'],
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderColor: theme.colors['Light'],
      borderRadius: 12,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    Text386c7773: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 25,
    },
    Text51509484: {
      color: theme.colors['Community_Medium_Black'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 12,
    },
    Text7941b3e9: {
      color: theme.colors['Light'],
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      marginLeft: 8,
    },
    Textdf21c20e: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_700Bold',
      fontSize: 16,
    },
    Textec7a22b1: {
      color: theme.colors['Light'],
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '600',
      marginLeft: 6,
    },
    Textf81fde6f: {
      color: theme.colors['Community_Medium_Black'],
      fontFamily: 'OpenSans_700Bold',
      fontSize: 12,
    },
    Touchable9fcf7743: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
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
    Viewc992f941: { flex: 1 },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewfad6867a: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 20,
      marginRight: 20,
    },
    Viewfd6a5058: { borderRadius: 8, marginLeft: 8, overflow: 'hidden' },
    screen: { backgroundColor: theme.colors['Background'] },
  });

export default withTheme(MyRoomsScreen_j5Jk7mIq);
