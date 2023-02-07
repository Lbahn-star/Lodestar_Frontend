import React from 'react';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Checkbox,
  IconButton,
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

const InviteScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer scrollable={true} hasTopSafeArea={true} hasSafeArea={true}>
      <DraftbitApi.FetchEpisodesGET limit={30}>
        {({ loading, error, data, refetchEpisodes }) => {
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
              <View style={styles(theme).View2563b236}>
                <IconButton
                  icon={'Ionicons/arrow-back-sharp'}
                  color={theme.colors['Community_Dark_UI']}
                  size={28}
                />
                <Text
                  style={styles(theme).Textfea52b92}
                  adjustsFontSizeToFit={true}
                >
                  {'Select Room to Invite\n'}
                </Text>
                <Button
                  onPress={() => {
                    try {
                      navigation.goBack();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles(theme).Button6a3b7e4b}
                  activeOpacity={0.8}
                  disabledOpacity={0.8}
                  title={'Send'}
                />
              </View>
              <FlatList
                data={fetchData}
                listKey={'4TRmXpim'}
                keyExtractor={listData =>
                  listData?.id || listData?.uuid || JSON.stringify(listData)
                }
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <>
                      <Touchable>
                        <View>
                          <View style={styles(theme).Viewce4accf0}>
                            <View style={styles(theme).Vieweb8a4c38} />
                            <View style={styles(theme).View8e23439a}>
                              <Text style={styles(theme).Text4a4819fe}>
                                {listData?.categories}
                              </Text>

                              <Text
                                style={styles(theme).Text581fa8b6}
                                ellipsizeMode={'tail'}
                                numberOfLines={2}
                              >
                                {listData?.title}
                              </Text>

                              <Text style={styles(theme).Text1a31591c}>
                                {'by '}
                                {listData?.author}
                              </Text>
                            </View>
                            <View style={styles(theme).View59b1f5da} />
                            <Checkbox
                              onPress={newCheckboxValue => {
                                const checkboxValue = newCheckboxValue;
                                try {
                                  setCheckboxValue(checkboxValue);
                                  setGlobalVariableValue({
                                    key: 'SECRET_KEY',
                                    value: newCheckboxValue,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                              status={checkboxValue}
                            />
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
      </DraftbitApi.FetchEpisodesGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button6a3b7e4b: {
      backgroundColor: theme.colors['Background'],
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: theme.colors['Background'],
      borderRadius: 8,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 8,
      color: theme.colors['Custom Color'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 12,
      textAlign: 'center',
    },
    Fetch431eb058: { minHeight: 40 },
    FlatListb7ca1dbcContent: {
      flex: 1,
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
    Text1a31591c: {
      color: theme.colors.primary,
      fontFamily: 'ABeeZee_400Regular',
      marginTop: 4,
    },
    Text4a4819fe: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 10,
    },
    Text581fa8b6: {
      color: theme.colors.strong,
      fontFamily: 'ABeeZee_400Regular',
      marginTop: 2,
    },
    Textfea52b92: {
      alignSelf: 'center',
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 18,
    },
    View2563b236: {
      alignContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View59b1f5da: { marginLeft: 8 },
    View8e23439a: { flex: 1, marginLeft: 12 },
    Viewce4accf0: { alignItems: 'center', flexDirection: 'row' },
    Vieweb8a4c38: { alignItems: 'center', justifyContent: 'center' },
  });

export default withTheme(InviteScreen);
