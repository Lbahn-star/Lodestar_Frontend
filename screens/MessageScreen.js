import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import {
  Circle,
  Icon,
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
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const MessageScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).Viewe1fc4527}>
        {/* Left View */}
        <View style={styles(theme).View08de818b}>
          {/* Back */}
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
                name={'Ionicons/arrow-back-sharp'}
                color={theme.colors['Custom Color']}
              />
            </Circle>
          </Touchable>

          <View style={styles(theme).Viewdf6ad9a1}>
            {/* User Image */}
            <Circle bgColor={theme.colors.light} size={40}>
              <Image
                style={styles(theme).Image5b3ab012}
                resizeMode={'cover'}
                source={{
                  uri: `${
                    props.route?.params?.OtherUserImage ??
                    'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg'
                  }`,
                }}
              />
            </Circle>
            {/* Name */}
            <Text style={styles(theme).Textddbb067f}>
              {props.route?.params?.otherUser ?? 'Arvind'}
            </Text>
          </View>
        </View>
        {/* Right View */}
        <View style={styles(theme).View08de818b}>
          {/* Video Call */}
          <Touchable style={styles(theme).Touchable09162134}>
            <Circle size={50}>
              <Icon
                size={24}
                color={theme.colors['Custom Color']}
                name={'MaterialIcons/video-call'}
              />
            </Circle>
          </Touchable>
          {/* Audio Call */}
          <Touchable>
            <Circle size={50}>
              <Icon
                size={24}
                color={theme.colors['Custom Color']}
                name={'MaterialIcons/call'}
              />
            </Circle>
          </Touchable>
        </View>
      </View>

      <KeyboardAwareScrollView
        style={styles(theme).KeyboardAwareScrollView989db244}
        contentContainerStyle={
          styles(theme).KeyboardAwareScrollViewa3d94ddbContent
        }
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        {/* Chats */}
        <DraftbitExampleDataApi.FetchUsersGET limit={3}>
          {({ loading, error, data, refetchUsers }) => {
            const chatsData = data;
            if (!chatsData || loading) {
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
                data={chatsData}
                listKey={'cqCbS1m5'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Users message */}
                      <>
                        {!(listData?.id === 2) ? null : (
                          <View style={styles(theme).Viewce807ec5}>
                            <View style={styles(theme).Viewc992f941}>
                              <View style={styles(theme).View2f131e5e}>
                                {/* Message ~ */}
                                <Text style={styles(theme).Text4d2080a7}>
                                  {listData?.bio}
                                </Text>
                                {/* time ~! */}
                                <Text style={styles(theme).Textdb65e063}>
                                  {'9:41 AM'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        )}
                      </>
                      {/* My message */}
                      <>
                        {!(listData?.id !== 2) ? null : (
                          <View style={styles(theme).View4b6675ff}>
                            <View style={styles(theme).Viewc992f941}>
                              <View style={styles(theme).View10e97140}>
                                {/* Message ~ */}
                                <Text style={styles(theme).Text4d2080a7}>
                                  {listData?.bio}
                                </Text>
                                {/* time ~! */}
                                <Text style={styles(theme).Text097779c9}>
                                  {'9:41 AM'}
                                  {/* Read Reciepts */}
                                  <Text style={styles(theme).Textf645a676}>
                                    {'     R'}
                                  </Text>
                                </Text>
                              </View>
                            </View>
                          </View>
                        )}
                      </>
                    </>
                  );
                }}
                numColumns={1}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchUsersGET>
        {/* Message Tray */}
        <View style={styles(theme).Viewea463cb4}>
          {/* Emojis */}
          <View style={styles(theme).View53f79c36}>
            {/* Send */}
            <Touchable>
              <View style={styles(theme).View53f79c36}>
                <Icon
                  size={24}
                  color={theme.colors['Custom Color_5']}
                  name={'Entypo/emoji-happy'}
                />
              </View>
            </Touchable>
          </View>

          <View style={styles(theme).Viewadbad3c8}>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput0828c608}
              value={textInputValue}
              placeholder={'Type your message...'}
              editable={true}
              placeholderTextColor={theme.colors['Light']}
            />
          </View>
          {/* Send */}
          <View style={styles(theme).View53f79c36}>
            {/* Send */}
            <Touchable>
              <View style={styles(theme).View53f79c36}>
                <Icon
                  size={24}
                  name={'Ionicons/send'}
                  color={theme.colors['Custom Color_5']}
                />
              </View>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    Image5b3ab012: { height: 40, width: 40 },
    KeyboardAwareScrollViewa3d94ddbContent: {
      flex: 1,
      justifyContent: 'space-between',
      marginBottom: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
    },
    Text097779c9: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 11,
      lineHeight: 20,
      marginRight: 10,
      marginTop: 4,
      opacity: 1,
      paddingBottom: 2,
      textAlign: 'right',
    },
    Text4d2080a7: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 15,
      lineHeight: 20,
      opacity: 0.7,
    },
    TextInput0828c608: {
      borderRadius: 8,
      color: theme.colors['Custom Color'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 14,
      marginLeft: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textdb65e063: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Inter_500Medium',
      fontSize: 11,
      lineHeight: 20,
      marginLeft: 10,
      marginTop: 4,
      opacity: 0.5,
      paddingBottom: 2,
      textAlign: 'right',
    },
    Textddbb067f: {
      color: theme.colors['Custom Color'],
      fontFamily: 'Poppins_600SemiBold',
      fontSize: 18,
      marginLeft: 15,
    },
    Textf645a676: {
      color: theme.colors['Custom Color_5'],
      fontFamily: 'Inter_600SemiBold',
      fontSize: 11,
      lineHeight: 20,
      marginTop: 4,
      opacity: 1,
      paddingBottom: 2,
      textAlign: 'right',
    },
    Touchable09162134: { marginRight: 12 },
    View08de818b: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'center',
    },
    View10e97140: {
      backgroundColor: theme.colors['Custom Color_10'],
      borderRadius: 6,
      flex: 1,
      marginLeft: 45,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
    View2f131e5e: {
      backgroundColor: theme.colors['Custom Color_10'],
      borderRadius: 6,
      flex: 1,
      marginRight: 45,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
    View4b6675ff: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 4,
      overflow: 'hidden',
      paddingBottom: 4,
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    Viewadbad3c8: {
      borderBottomWidth: 1,
      borderColor: theme.colors['Custom Color_6'],
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flex: 1,
      justifyContent: 'center',
    },
    Viewc992f941: { flex: 1 },
    Viewce807ec5: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
      overflow: 'hidden',
      paddingBottom: 4,
    },
    Viewdf6ad9a1: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 12,
    },
    Viewe1fc4527: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewea463cb4: {
      alignItems: 'center',
      backgroundColor: theme.colors['Background'],
      borderRadius: 24,
      bottom: 0,
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      left: 0,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      position: 'absolute',
      right: 0,
    },
    screen: { justifyContent: 'space-between' },
  });

export default withTheme(MessageScreen);
