import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import Images from '../config/Images';
import {
  CircleImage,
  Icon,
  Link,
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

const FollowingScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [menuTab1, setMenuTab1] = React.useState(true);
  const [menuTab2, setMenuTab2] = React.useState(false);
  const [menuTab3, setMenuTab3] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      {/* Header Frame */}
      <View style={styles(theme).Viewdbf79098}>
        {/* Navigation Frame */}
        <View style={styles(theme).View0d6090cf}>
          {/* Flex Touchable */}
          <View style={styles(theme).View0419a0dc}>
            <Touchable
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Left Frame */}
              <View style={styles(theme).View43b593eb}>
                {/* Icon Frame */}
                <View style={styles(theme).Viewea169ccc}>
                  {/* Back */}
                  <Icon
                    name={'AntDesign/arrowleft'}
                    size={24}
                    color={theme.colors.custom_rgb97_116_246}
                  />
                </View>
                {/* Screen Title Frame */}
                <View style={styles(theme).Viewea169ccc}>
                  {/* Title */}
                  <Text style={styles(theme).Text4cb05b5c}>{'Following'}</Text>
                </View>
              </View>
            </Touchable>
          </View>
        </View>
      </View>
      {/* Scroll Content Frame */}
      <ScrollView
        style={styles(theme).ScrollViewb284e5b0}
        contentContainerStyle={styles(theme).ScrollView4e34f380Content}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        {/* Following List Frame */}
        <View style={styles(theme).Viewf8304bf6}>
          {/* List Content Frame */}
          <View>
            {/* List Title Frame  */}
            <View style={styles(theme).View0ca8d833}>
              {/* Rich Text Title */}
              <Text style={styles(theme).Texte61fc18f}>
                {'Following (312)'}
              </Text>
            </View>

            <DraftbitExampleDataApi.FetchExampleDataList10GET>
              {({ loading, error, data, refetchExampleDataList10 }) => {
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
                    listKey={'4TPHEFRU'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {/* Records Frame */}
                          <View style={styles(theme).Viewf8304bf6}>
                            {/* Flex Touchable */}
                            <View style={styles(theme).Viewf1746056}>
                              <Touchable>
                                {/* Record Item Frame */}
                                <View style={styles(theme).View73db1511}>
                                  {/* Left Side Frame */}
                                  <View style={styles(theme).Viewe09f063e}>
                                    {/* Review Image */}
                                    <CircleImage
                                      source={
                                        Images.CharlieGreen3JmfENcL24MUnsplash
                                      }
                                      size={64}
                                    />
                                  </View>
                                  {/* Middle Frame */}
                                  <View style={styles(theme).Viewfcd7183b}>
                                    {/* Top Frame */}
                                    <View style={styles(theme).View09162134}>
                                      {/* Record Name */}
                                      <Text
                                        style={styles(theme).Texta10a092d}
                                        ellipsizeMode={'tail'}
                                      >
                                        {'Michael Zanderous'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          </View>
                        </>
                      );
                    }}
                    style={styles(theme).FlatList989db244}
                    contentContainerStyle={
                      styles(theme).FlatListc992f941Content
                    }
                    numColumns={1}
                  />
                );
              }}
            </DraftbitExampleDataApi.FetchExampleDataList10GET>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    Link37b9b356: {
      color: theme.colors.primary,
      fontFamily: 'OpenSans_700Bold',
      fontSize: 12,
      lineHeight: 19,
    },
    ScrollView4e34f380Content: { flexShrink: 0 },
    ScrollViewb284e5b0: { flexGrow: 1 },
    Text49682267: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      lineHeight: 18,
    },
    Text4cb05b5c: {
      color: theme.colors.strong,
      fontFamily: 'Belgrano_400Regular',
      fontSize: 18,
      lineHeight: 24,
    },
    Text6abadbba: {
      color: theme.colors.custom_rgb255_255_255,
      fontFamily: 'OpenSans_400Regular',
    },
    Texta10a092d: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_700Bold',
      paddingBottom: 9,
    },
    Texte61fc18f: {
      color: theme.colors.strong,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 16,
    },
    Texte88e1c80: {
      color: theme.colors.custom_rgb153_153_153,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 10,
      lineHeight: 16,
    },
    View0419a0dc: { flexGrow: 1, flexShrink: 0 },
    View09162134: { marginRight: 12 },
    View0aa36c3c: { alignItems: 'center', flexDirection: 'row', marginTop: 6 },
    View0ca8d833: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    View0d6090cf: { flexDirection: 'row', flexGrow: 0, flexShrink: 0 },
    View43b593eb: { flexDirection: 'row', flexGrow: 1, flexShrink: 0 },
    View6a955cc3: { justifyContent: 'center' },
    View6fc1f5de: { flexGrow: 0, flexShrink: 0, justifyContent: 'center' },
    View72a59391: {
      alignItems: 'center',
      backgroundColor: theme.colors.custom_rgb97_116_246,
      borderRadius: 12,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      marginRight: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      paddingRight: 6,
      paddingTop: 6,
    },
    View73db1511: {
      borderBottomWidth: 1,
      borderColor: theme.colors.custom_rgb218_218_218,
      borderLeftWidth: 1,
      borderRadius: 12,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
      paddingBottom: 12,
      paddingTop: 12,
    },
    View80edaea1: {
      backgroundColor: theme.colors.custom_rgb233_236_252,
      borderRadius: 8,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Viewb143a85e: {
      alignItems: 'center',
      flexDirection: 'row',
      flexGrow: 0,
      flexShrink: 0,
    },
    Viewdbf79098: { flexGrow: 0, flexShrink: 0 },
    Viewe09f063e: {
      alignItems: 'center',
      borderBottomLeftRadius: 12,
      borderTopLeftRadius: 12,
      flexGrow: 0,
      flexShrink: 0,
      justifyContent: 'center',
      paddingLeft: 12,
    },
    Viewea169ccc: {
      paddingBottom: 12,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
    },
    Viewf1746056: { marginBottom: 12, marginLeft: 12, marginRight: 12 },
    Viewf8304bf6: { marginTop: 12 },
    Viewfcd7183b: {
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',
      marginLeft: 18,
    },
    Viewfe2670fd: { marginRight: 3 },
  });

export default withTheme(FollowingScreen);
