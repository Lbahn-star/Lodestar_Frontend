import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MyChannelScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [optionsMenu, setOptionsMenu] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState('home');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
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
          {/* Screen Heading */}
          <Text style={styles(theme).Textc014fbe5}>{'My Channel'}</Text>
        </View>
        {/* Right View */}
        <View style={styles(theme).Viewce4accf0}>
          {/* Share */}
          <View style={styles(theme).View53f79c36}>
            <Touchable>
              <Icon
                name={'FontAwesome/send'}
                size={20}
                color={theme.colors['Custom Color_21']}
              />
            </Touchable>
          </View>
          {/* Menu */}
          <View style={styles(theme).View53f79c36}>
            <Touchable
              onPress={() => {
                try {
                  setOptionsMenu(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Icon
                size={24}
                name={'MaterialCommunityIcons/dots-horizontal-circle-outline'}
                color={theme.colors['Custom Color_21']}
              />
            </Touchable>
          </View>
        </View>
      </View>
      {/* Container */}
      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView7487de42Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Banner */}
        <View>
          {/* Banner */}
          <Image
            style={styles(theme).Imageebdba962}
            resizeMode={'cover'}
            source={Images.Banner}
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
        <View style={styles(theme).Viewc6411e4b}>
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
            style={styles(theme).Touchable9fcf7743}
          >
            <View>
              <Image
                style={styles(theme).Imagecb2c1d96}
                resizeMode={'cover'}
                source={Images.User}
              />
              <View style={styles(theme).Viewbdcc7b8f}>
                <Icon
                  color={theme.colors['Custom #ffffff']}
                  name={'MaterialIcons/edit'}
                  size={12}
                />
              </View>
            </View>
          </Touchable>

          <View style={styles(theme).View31b5c7f0}>
            {/* Name */}
            <Text style={styles(theme).Text4ab7f745}>{'AndrewAinsley'}</Text>
            {/* Status */}
            <Text style={styles(theme).Textab4cefa6}>{'Offline'}</Text>
          </View>
          {/* Edit */}
          <Touchable>
            <View style={styles(theme).View62a98b8b}>
              <Icon
                name={'AntDesign/edit'}
                color={theme.colors['Custom #ffffff']}
                size={15}
              />
              <Text style={styles(theme).Text9c5578be}>{'Edit'}</Text>
            </View>
          </Touchable>
        </View>
        {/* About */}
        <Text style={styles(theme).Text65c1a4b0}>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
          }
        </Text>
        {/* Social Channels */}
        <View style={styles(theme).Viewa7d87014}>
          {/* discord */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync('https://discord.com/');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable6dc4da3d}
          >
            <Image
              style={styles(theme).Image33b61cb6}
              resizeMode={'cover'}
              source={Images.Discord}
            />
          </Touchable>
          {/* Youtube */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.youtube.com/c/draftbit'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable27ed6151}
          >
            <Image
              style={styles(theme).Image33b61cb6}
              resizeMode={'cover'}
              source={Images.Yt}
            />
          </Touchable>
          {/* twitter */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://twitter.com/draftbit'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable27ed6151}
          >
            <Image
              style={styles(theme).Image33b61cb6}
              resizeMode={'cover'}
              source={Images.Twtr}
            />
          </Touchable>
          {/* Instagram */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.instagram.com/draftbit/?hl=en'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable27ed6151}
          >
            <Image
              style={styles(theme).Image33b61cb6}
              resizeMode={'cover'}
              source={Images.Ig}
            />
          </Touchable>
          {/* facebook */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.facebook.com/'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable27ed6151}
          >
            <Image
              style={styles(theme).Image33b61cb6}
              resizeMode={'cover'}
              source={Images.Fb}
            />
          </Touchable>
          {/* telegram */}
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync('https://telegram.org/');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable27ed6151}
          >
            <Image
              style={styles(theme).Image33b61cb6}
              resizeMode={'cover'}
              source={Images.Telgrm}
            />
          </Touchable>
        </View>
        {/* Tabs */}
        <View style={styles(theme).View9ae2daf4}>
          {/* Home */}
          <View style={styles(theme).Viewc992f941}>
            {/* selected */}
            <>
              {!(selectedTab === 'home') ? null : (
                <Touchable>
                  <View style={styles(theme).View1c3ec002}>
                    <Text style={styles(theme).Texte35ef8fb}>{'Home'}</Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'home') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('home');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).Viewf4eb1b21}>
                    <Text style={styles(theme).Textac786907}>{'Home'}</Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* About */}
          <View style={styles(theme).Viewc992f941}>
            {/* selected */}
            <>
              {!(selectedTab === 'about') ? null : (
                <Touchable>
                  <View style={styles(theme).Viewc5dba82f}>
                    <Text style={styles(theme).Texte35ef8fb}>{'About'}</Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'about') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('about');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).Viewf4eb1b21}>
                    <Text style={styles(theme).Textac786907}>{'About'}</Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* Schedule */}
          <View style={styles(theme).Viewc992f941}>
            {/* selected */}
            <>
              {!(selectedTab === 'schedule') ? null : (
                <Touchable>
                  <View style={styles(theme).Viewc5dba82f}>
                    <Text style={styles(theme).Texte35ef8fb}>{'Schedule'}</Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'schedule') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('schedule');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).Viewf4eb1b21}>
                    <Text style={styles(theme).Textac786907}>{'Schedule'}</Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
          {/* Videos */}
          <View style={styles(theme).Viewc992f941}>
            {/* selected */}
            <>
              {!(selectedTab === 'video') ? null : (
                <Touchable>
                  <View style={styles(theme).Viewc5dba82f}>
                    <Text style={styles(theme).Texte35ef8fb}>{'Videos'}</Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* unselected */}
            <>
              {!(selectedTab !== 'video') ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedTab('video');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles(theme).Viewf4eb1b21}>
                    <Text style={styles(theme).Textac786907}>{'Videos'}</Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Home */}
        <>
          {!(selectedTab === 'home') ? null : (
            <View>
              {/* Last Stream */}
              <View>
                {/* heading */}
                <View style={styles(theme).View446316eb}>
                  <Text style={styles(theme).Text3abf5eaa}>
                    {'Your Last Stream'}
                  </Text>

                  <Touchable>
                    <Icon
                      size={24}
                      name={'AntDesign/arrowright'}
                      color={theme.colors['Custom Color']}
                    />
                  </Touchable>
                </View>

                <Touchable>
                  <Image
                    style={styles(theme).Image2e8e79e6}
                    resizeMode={'cover'}
                    source={Images.LastStream}
                  />
                </Touchable>
              </View>
              {/* Followed Categories */}
              <View style={styles(theme).Viewd62adfa2}>
                {/* heading */}
                <View style={styles(theme).View446316eb}>
                  <Text style={styles(theme).Text3abf5eaa}>
                    {'Categories You Followed'}
                  </Text>

                  <Touchable>
                    <Icon
                      size={24}
                      name={'AntDesign/arrowright'}
                      color={theme.colors['Custom Color']}
                    />
                  </Touchable>
                </View>

                <ExampleDataApi.FetchUsersGET limit={5}>
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
                      <FlashList
                        data={fetchData}
                        listKey={'6amYRrdZ'}
                        keyExtractor={flashListData =>
                          flashListData?.id ||
                          flashListData?.uuid ||
                          JSON.stringify(flashListData)
                        }
                        renderItem={({ item }) => {
                          const flashListData = item;
                          return (
                            <Touchable style={styles(theme).Touchable65bacc84}>
                              <View>
                                <Image
                                  style={styles(theme).Image4a2b1390}
                                  resizeMode={'cover'}
                                  source={Images.LastStream}
                                />
                                <Text style={styles(theme).Text0e130ace}>
                                  {'Overwatch 2'}
                                </Text>

                                <Text style={styles(theme).Texteac277b8}>
                                  {'245K viewers'}
                                </Text>
                              </View>
                            </Touchable>
                          );
                        }}
                        style={styles(theme).FlashList989db244}
                        contentContainerStyle={
                          styles(theme).FlashListc992f941Content
                        }
                        estimatedItemSize={50}
                        numColumns={1}
                        horizontal={true}
                      />
                    );
                  }}
                </ExampleDataApi.FetchUsersGET>
              </View>
            </View>
          )}
        </>
        {/* About */}
        <>
          {!(selectedTab === 'about') ? null : (
            <View style={styles(theme).Viewa766fe55}>
              <Text style={styles(theme).Text7d1b414f}>{'Description'}</Text>

              <Text style={styles(theme).Text362c1029}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
              </Text>
            </View>
          )}
        </>
        {/* Schedule */}
        <>
          {!(selectedTab === 'schedule') ? null : (
            <View style={styles(theme).Viewa766fe55}>
              {/* Top View */}
              <View style={styles(theme).Viewa2adc727}>
                <Text style={styles(theme).Text7d1b414f}>{'Now Streams'}</Text>

                <Touchable>
                  <View>
                    <Image
                      style={styles(theme).Image4e2f3105}
                      resizeMode={'cover'}
                      source={Images.LastStream}
                    />
                    <View style={styles(theme).View24165556}>
                      <Text style={styles(theme).Textb0cc386a}>{'LIVE'}</Text>
                    </View>

                    <View style={styles(theme).View5ad6cc04}>
                      <Text style={styles(theme).Textb0cc386a}>
                        {'9.4K Viewers'}
                      </Text>
                    </View>
                  </View>
                </Touchable>

                <Text style={styles(theme).Texte1535ae2}>
                  {'Drops Enable Overwatch 2 Gameplay'}
                </Text>

                <Text style={styles(theme).Texte36707de}>
                  {'Overwatch 2 • Now'}
                </Text>
              </View>

              <ExampleDataApi.FetchUsersGET limit={5}>
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
                    <FlashList
                      data={fetchData}
                      listKey={'575auZgf'}
                      keyExtractor={flashListData =>
                        flashListData?.id ||
                        flashListData?.uuid ||
                        JSON.stringify(flashListData)
                      }
                      renderItem={({ item }) => {
                        const flashListData = item;
                        return (
                          <Touchable style={styles(theme).Touchable59cdaa9e}>
                            <Text style={styles(theme).Textbcd3719e}>
                              {'Saturday, December 22'}
                            </Text>

                            <View style={styles(theme).View4c89954d}>
                              <Image
                                style={styles(theme).Image4a2b1390}
                                resizeMode={'cover'}
                                source={Images.Games}
                              />
                              <View style={styles(theme).View897c6051}>
                                <Text style={styles(theme).Textbc4fc239}>
                                  {'Overwatch 2'}
                                </Text>

                                <Text style={styles(theme).Text1fa075ff}>
                                  {'Contest: Scannon VS Gynyield'}
                                </Text>

                                <Text style={styles(theme).Text1fa075ff}>
                                  {'17:00'}
                                </Text>
                              </View>
                            </View>
                          </Touchable>
                        );
                      }}
                      style={styles(theme).FlashList989db244}
                      contentContainerStyle={
                        styles(theme).FlashListc992f941Content
                      }
                      estimatedItemSize={50}
                      numColumns={1}
                    />
                  );
                }}
              </ExampleDataApi.FetchUsersGET>
            </View>
          )}
        </>
        {/* Videos */}
        <>
          {!(selectedTab === 'video') ? null : (
            <View style={styles(theme).View6f059d98}>
              <ExampleDataApi.FetchUsersGET limit={7}>
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
                    <FlashList
                      data={fetchData}
                      listKey={'nOiLLDqd'}
                      keyExtractor={flashListData =>
                        flashListData?.id ||
                        flashListData?.uuid ||
                        JSON.stringify(flashListData)
                      }
                      renderItem={({ item }) => {
                        const flashListData = item;
                        return (
                          <Touchable style={styles(theme).Touchable20607a6a}>
                            <View style={styles(theme).Viewf05d1977}>
                              <Image
                                style={styles(theme).Imageb18eb4a0}
                                resizeMode={'cover'}
                                source={Images.Video}
                              />
                              <View style={styles(theme).View8e23439a}>
                                {/* Name */}
                                <Text
                                  style={styles(theme).Textba1e1b48}
                                  numberOfLines={1}
                                >
                                  {'Overwatch 2 Gameplay'}
                                </Text>

                                <View style={styles(theme).Viewce4accf0}>
                                  <Text style={styles(theme).Texta228c8cb}>
                                    {'TalesWire'}
                                  </Text>
                                  <Icon
                                    style={styles(theme).Iconda2fc39f}
                                    name={'MaterialIcons/verified'}
                                    color={theme.colors['Custom Color']}
                                    size={20}
                                  />
                                </View>
                                {/* Views | timestamp */}
                                <Text style={styles(theme).Text563260a1}>
                                  {'4.8M Views • 1 hour ago'}
                                </Text>
                              </View>
                            </View>
                          </Touchable>
                        );
                      }}
                      estimatedItemSize={50}
                      numColumns={1}
                    />
                  );
                }}
              </ExampleDataApi.FetchUsersGET>
            </View>
          )}
        </>
      </ScrollView>
      {/* Go Live */}
      <View style={styles(theme).View268ab962}>
        <Touchable>
          <View style={styles(theme).View78f746c6}>
            <Icon
              name={'Ionicons/ios-videocam'}
              color={theme.colors['Custom #ffffff']}
              size={20}
            />
            <Text style={styles(theme).Text681bfcd4}>{'Go Live'}</Text>
          </View>
        </Touchable>
      </View>
      {/* OptionsMenu */}
      <>
        {!optionsMenu ? null : (
          <ActionSheet visible={true}>
            {/* Send Message */}
            <ActionSheetItem
              onPress={() => {
                try {
                  setOptionsMenu(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).ActionSheetItemc521608b}
              color={theme.colors.strong}
              label={'Send Message'}
            />
            {/* Report TalesWire */}
            <ActionSheetItem
              onPress={() => {
                try {
                  setOptionsMenu(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).ActionSheetItemc521608b}
              color={theme.colors.strong}
              label={'Report TalesWire'}
            />
            {/* Cancel */}
            <ActionSheetCancel
              onPress={() => {
                try {
                  setOptionsMenu(false);
                } catch (err) {
                  console.error(err);
                }
              }}
              label={'Cancel'}
            />
          </ActionSheet>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    ActionSheetItemc521608b: { textAlign: 'center' },
    Fetch431eb058: { minHeight: 40 },
    FlashListc992f941Content: { flex: 1 },
    Iconda2fc39f: { marginLeft: 6 },
    Image2e8e79e6: { borderRadius: 20, height: 215 },
    Image33b61cb6: { height: 24, width: 24 },
    Image4a2b1390: { borderRadius: 16, height: 160, width: 120 },
    Image4e2f3105: { borderRadius: 16, height: 215 },
    Imageb18eb4a0: { borderRadius: 16, height: 80, width: 140 },
    Imagecb2c1d96: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      height: 80,
      width: 80,
    },
    Imageebdba962: { borderRadius: 20, height: 140 },
    ScrollView7487de42Content: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    Text0e130ace: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
      marginTop: 12,
    },
    Text1fa075ff: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      marginTop: 18,
    },
    Text362c1029: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 15,
      lineHeight: 21,
      opacity: 0.7,
    },
    Text3abf5eaa: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 21,
    },
    Text4ab7f745: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
    },
    Text563260a1: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      opacity: 0.75,
      paddingBottom: 3,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 3,
    },
    Text65c1a4b0: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      lineHeight: 21,
    },
    Text681bfcd4: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 17,
      marginLeft: 10,
    },
    Text7d1b414f: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      lineHeight: 21,
      marginBottom: 15,
      opacity: 1,
      textTransform: 'capitalize',
    },
    Text9c5578be: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_500Medium',
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 15,
      paddingTop: 8,
    },
    Texta228c8cb: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 13,
      marginBottom: 10,
      marginTop: 10,
    },
    Textab4cefa6: {
      color: theme.colors.strong,
      fontFamily: 'Inter_400Regular',
      fontSize: 14,
      marginTop: 5,
    },
    Textac786907: {
      color: theme.colors['Light'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Textb0cc386a: {
      color: theme.colors['Custom #ffffff'],
      fontFamily: 'Inter_400Regular',
      fontSize: 12,
      paddingBottom: 4,
      paddingTop: 4,
    },
    Textba1e1b48: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 16,
    },
    Textbc4fc239: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
    },
    Textbcd3719e: {
      color: theme.colors.strong,
      fontFamily: 'Inter_500Medium',
      fontSize: 18,
      marginBottom: 10,
    },
    Textc014fbe5: {
      color: theme.colors['Strong'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    Texte1535ae2: {
      color: theme.colors.strong,
      fontFamily: 'Inter_600SemiBold',
      fontSize: 18,
      lineHeight: 21,
      marginBottom: 10,
      marginTop: 15,
      opacity: 1,
      textTransform: 'capitalize',
    },
    Texte35ef8fb: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Inter_500Medium',
      fontSize: 16,
    },
    Texte36707de: {
      color: theme.colors.strong,
      fontFamily: 'Inter_300Light',
      fontSize: 14,
      lineHeight: 21,
      marginBottom: 15,
      opacity: 1,
      textTransform: 'capitalize',
    },
    Texteac277b8: { color: theme.colors.strong, marginTop: 6 },
    Touchable20607a6a: { marginTop: 15 },
    Touchable27ed6151: { marginLeft: 10, marginRight: 10 },
    Touchable59cdaa9e: { marginBottom: 20, marginTop: 5 },
    Touchable65bacc84: { marginRight: 20 },
    Touchable6dc4da3d: { marginRight: 10 },
    Touchable9fcf7743: {
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    View1c3ec002: {
      alignItems: 'center',
      borderBottomWidth: 3,
      borderColor: theme.colors['Custom Color'],
      paddingBottom: 10,
    },
    View24165556: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_8'],
      borderRadius: 6,
      height: 24,
      justifyContent: 'center',
      left: 20,
      position: 'absolute',
      top: 20,
      width: 41,
    },
    View268ab962: { bottom: 25, position: 'absolute', right: 25 },
    View31b5c7f0: { flex: 1, paddingLeft: 16 },
    View446316eb: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingTop: 20,
    },
    View4c89954d: { alignItems: 'center', flexDirection: 'row', height: 160 },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View5ad6cc04: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_2'],
      borderRadius: 6,
      bottom: 20,
      height: 24,
      justifyContent: 'center',
      left: 20,
      position: 'absolute',
      width: 90,
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
    View62a98b8b: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color'],
      borderRadius: 100,
      flexDirection: 'row',
      paddingLeft: 15,
    },
    View6f059d98: { flex: 1, paddingBottom: 15 },
    View78f746c6: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color'],
      borderRadius: 100,
      flexDirection: 'row',
      height: 45,
      justifyContent: 'center',
      width: 140,
    },
    View897c6051: { marginLeft: 16 },
    View8e23439a: { flex: 1, marginLeft: 12 },
    View9ae2daf4: { alignItems: 'center', flexDirection: 'row', marginTop: 10 },
    Viewa2adc727: { marginBottom: 10 },
    Viewa766fe55: { paddingBottom: 20, paddingTop: 15 },
    Viewa7d87014: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 15,
      paddingTop: 15,
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
    Viewbdcc7b8f: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color'],
      borderRadius: 4,
      bottom: 0,
      height: 22,
      justifyContent: 'center',
      position: 'absolute',
      right: 0,
      width: 22,
    },
    Viewc5dba82f: {
      alignItems: 'center',
      borderBottomWidth: 3,
      borderColor: theme.colors['Custom Color'],
      flex: 1,
      paddingBottom: 10,
    },
    Viewc6411e4b: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 20,
      paddingTop: 20,
    },
    Viewc992f941: { flex: 1 },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Viewd62adfa2: { paddingBottom: 20 },
    Viewf05d1977: { alignItems: 'center', flexDirection: 'row', height: 80 },
    Viewf4eb1b21: {
      alignItems: 'center',
      borderBottomWidth: 2,
      borderColor: theme.colors['Light'],
      flex: 1,
      paddingBottom: 10,
    },
  });

export default withTheme(MyChannelScreen);
