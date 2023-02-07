import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const VoiceCallsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      {/* Header */}
      <View style={GlobalStyles.ViewStyles(theme)['header1']}>
        {/* Screen Heading */}
        <Text style={styles(theme).Text386c7773}>{'Voice Call'}</Text>
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

      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollViewb8a648aeContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Chats */}
        <View style={styles(theme).Viewf6a0bafa}>
          <DraftbitExampleDataApi.FetchUsersGET limit={10}>
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
                  listKey={'tNAeyUce'}
                  keyExtractor={listData =>
                    listData?.id || listData?.uuid || JSON.stringify(listData)
                  }
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('VoicecallDetailScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View style={styles(theme).View3823135e}>
                          {/* Image */}
                          <View>
                            <CircleImage
                              size={50}
                              source={Images.LolaRoseZcHseJqAeEcUnsplash}
                            />
                            {/* Green Badge */}
                            <>
                              {!(listData?.id < 4) ? null : (
                                <View style={styles(theme).View588f9cfb}>
                                  <Circle
                                    bgColor={theme.colors['Custom Color_12']}
                                    size={8}
                                  />
                                </View>
                              )}
                            </>
                          </View>
                          {/* Name and Message */}
                          <View style={styles(theme).Viewafa656cb}>
                            {/* Name ~ */}
                            <Text style={styles(theme).Textde0c9bbb}>
                              {listData?.fullName}
                            </Text>
                            {/* Message ~ */}
                            <Text
                              style={styles(theme).Text8eac770b}
                              numberOfLines={1}
                              ellipsizeMode={'head'}
                            >
                              {listData?.bio}
                            </Text>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                  style={styles(theme).FlatList989db244}
                  contentContainerStyle={styles(theme).FlatListc992f941Content}
                  numColumns={1}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchUsersGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    ScrollViewb8a648aeContent: { paddingBottom: 25 },
    Text386c7773: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 25,
    },
    Text8eac770b: {
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 12,
      lineHeight: 20,
      marginTop: 8,
      opacity: 0.5,
    },
    Textde0c9bbb: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 15,
      lineHeight: 20,
      marginTop: 4,
      opacity: 1,
    },
    View3823135e: {
      borderBottomWidth: 1,
      borderColor: theme.colors['BG Gray'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingTop: 12,
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View588f9cfb: {
      alignItems: 'center',
      backgroundColor: theme.colors['Custom Color_4'],
      borderRadius: 6,
      height: 12,
      justifyContent: 'center',
      marginLeft: 2,
      marginTop: 2,
      position: 'absolute',
      right: 0,
      top: 0,
      width: 12,
    },
    Viewafa656cb: { flex: 1, marginLeft: 10, marginRight: 20 },
    Viewf6a0bafa: { borderRadius: 12, marginLeft: 20, marginRight: 20 },
  });

export default withTheme(VoiceCallsScreen);
