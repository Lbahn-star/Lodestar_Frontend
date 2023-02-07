import React from 'react';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  DatePicker,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const UpdateProfileScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const lodestarMobilePutMePUT = LodestarMobileApi.usePutMePUT();

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [companyValue, setCompanyValue] = React.useState('');
  const [countryValue, setCountryValue] = React.useState('');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [educationValue, setEducationValue] = React.useState('');
  const [nameValue, setNameValue] = React.useState('');
  const [nationalityValue, setNationalityValue] = React.useState('');
  const [titleValue, setTitleValue] = React.useState('');

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      {/* Header */}
      <View style={styles(theme).Viewfbc072c8}>
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
        {/* Screen Heading */}
        <Text style={styles(theme).Text88c21980}>{'Fill Your Profile'}</Text>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps={'never'}
      >
        <LodestarMobileApi.FetchGetMeGET
          onData={fetchData => {
            console.log('Fetch ON_DATA Start');
            let error = null;
            try {
              console.log('Start ON_DATA:0 SET_SCREEN_LOCAL_STATE');
              setNameValue(fetchData?.name);
              console.log('Complete ON_DATA:0 SET_SCREEN_LOCAL_STATE');
              console.log('Start ON_DATA:1 SET_SCREEN_LOCAL_STATE');
              setEducationValue(fetchData?.education);
              console.log('Complete ON_DATA:1 SET_SCREEN_LOCAL_STATE');
              console.log('Start ON_DATA:2 SET_SCREEN_LOCAL_STATE');
              setCountryValue(fetchData?.country);
              console.log('Complete ON_DATA:2 SET_SCREEN_LOCAL_STATE');
              console.log('Start ON_DATA:3 SET_SCREEN_LOCAL_STATE');
              setTitleValue(fetchData?.job_title);
              console.log('Complete ON_DATA:3 SET_SCREEN_LOCAL_STATE');
              console.log('Start ON_DATA:4 SET_SCREEN_LOCAL_STATE');
              setCompanyValue(fetchData?.company_name);
              console.log('Complete ON_DATA:4 SET_SCREEN_LOCAL_STATE');
              console.log('Start ON_DATA:5 SET_SCREEN_LOCAL_STATE');
              setDatePickerValue(fetchData?.birthday);
              console.log('Complete ON_DATA:5 SET_SCREEN_LOCAL_STATE');
            } catch (err) {
              console.error(err);
              error = err.message ?? err;
            }
            console.log(
              'Fetch ON_DATA Complete',
              error ? { error } : 'no error'
            );
          }}
        >
          {({ loading, error, data, refetchGetMe }) => {
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
              <View style={styles(theme).View6d34ad1b}>
                {/* Photo */}
                <View>
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
                    <Image
                      style={styles(theme).Image605e9ded}
                      resizeMode={'cover'}
                      source={Images.Avatar}
                    />
                  </Touchable>
                </View>
                {/* Full name */}
                <View style={styles(theme).Viewa55eb6ad}>
                  <View style={styles(theme).Viewe70c2465}>
                    {/* Name Input */}
                    <TextInput
                      onChangeText={newNameInputValue => {
                        try {
                          setNameValue(newNameInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).TextInput7247c2bd}
                      placeholder={'Full Name'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      defaultValue={nameValue}
                    />
                  </View>
                </View>
                {/* Education */}
                <View style={styles(theme).Viewa55eb6ad}>
                  <View style={styles(theme).Viewe70c2465}>
                    {/* Education Input */}
                    <TextInput
                      onChangeText={newEducationInputValue => {
                        try {
                          setEducationValue(newEducationInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).TextInput7247c2bd}
                      placeholder={'Education'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      defaultValue={educationValue}
                    />
                  </View>
                </View>
                {/* DOB */}
                <View style={styles(theme).View644faee4}>
                  <View style={styles(theme).Viewc97403d7}>
                    <DatePicker
                      onDateChange={newDatePickerValue => {
                        try {
                          setDatePickerValue(newDatePickerValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).DatePicker000060b8}
                      label={'Date of Birth'}
                      mode={'date'}
                      leftIconMode={'inset'}
                      rightIconName={'Feather/calendar'}
                      type={'underline'}
                      format={'yyyy-mm-dd'}
                      defaultValue={datePickerValue}
                    />
                  </View>
                </View>
                {/* Email */}
                <View style={styles(theme).Viewa55eb6ad}>
                  <View style={styles(theme).Viewe70c2465}>
                    {/* Email Input */}
                    <TextInput
                      style={styles(theme).TextInput7247c2bd}
                      editable={false}
                      placeholder={'Email'}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      secureTextEntry={false}
                      defaultValue={fetchData?.email}
                    />
                  </View>
                  <Icon
                    size={24}
                    color={theme.colors['Custom Color_20']}
                    name={'MaterialCommunityIcons/email-outline'}
                  />
                </View>
                {/* Nationality */}
                <View style={styles(theme).Viewa55eb6ad}>
                  <View style={styles(theme).Viewe70c2465}>
                    {/* Nationality Input */}
                    <TextInput
                      onChangeText={newNationalityInputValue => {
                        try {
                          setNationalityValue(newNationalityInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).TextInput7247c2bd}
                      placeholder={'Country of Birth'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      defaultValue={nationalityValue}
                    />
                  </View>
                </View>
                {/* Company */}
                <View style={styles(theme).Viewa55eb6ad}>
                  <View style={styles(theme).Viewe70c2465}>
                    {/* Company Input */}
                    <TextInput
                      onChangeText={newCompanyInputValue => {
                        try {
                          setCompanyValue(newCompanyInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).TextInput7247c2bd}
                      placeholder={'Current Company'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      defaultValue={companyValue}
                    />
                  </View>
                </View>
                {/* Title */}
                <View style={styles(theme).Viewa55eb6ad}>
                  <View style={styles(theme).Viewe70c2465}>
                    {/* Title Input */}
                    <TextInput
                      onChangeText={newTitleInputValue => {
                        try {
                          setTitleValue(newTitleInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).TextInput7247c2bd}
                      placeholder={'Position/Title'}
                      editable={true}
                      placeholderTextColor={theme.colors['Custom Color_20']}
                      defaultValue={titleValue}
                    />
                  </View>
                </View>
                {/* Continue */}
                <Button
                  onPress={() => {
                    const handler = async () => {
                      console.log('Continue ON_PRESS Start');
                      let error = null;
                      try {
                        console.log('Start ON_PRESS:0 FETCH_REQUEST');
                        await lodestarMobilePutMePUT.mutateAsync({
                          birthday: datePickerValue,
                          company_name: companyValue,
                          country: countryValue,
                          education: educationValue,
                          job_title: titleValue,
                          name: nameValue,
                          nationality: nationalityValue,
                        });
                        console.log('Complete ON_PRESS:0 FETCH_REQUEST');
                        console.log('Start ON_PRESS:1 NAVIGATE_NAVIGATOR');
                        navigation.navigate('RootNavigator');
                        console.log('Complete ON_PRESS:1 NAVIGATE_NAVIGATOR');
                      } catch (err) {
                        console.error(err);
                        error = err.message ?? err;
                      }
                      console.log(
                        'Continue ON_PRESS Complete',
                        error ? { error } : 'no error'
                      );
                    };
                    handler();
                  }}
                  style={styles(theme).Buttonda68831b}
                  title={'Continue '}
                />
              </View>
            );
          }}
        </LodestarMobileApi.FetchGetMeGET>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonda68831b: {
      backgroundColor: theme.colors['Text'],
      borderRadius: 100,
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 15,
      height: 40,
      marginBottom: 20,
      marginTop: 20,
      textAlign: 'center',
      width: '100%',
    },
    DatePicker000060b8: { fontFamily: 'OpenSans_400Regular' },
    Fetch431eb058: { minHeight: 40 },
    Image605e9ded: { height: 160, width: 160 },
    Text88c21980: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 20,
      marginLeft: 16,
    },
    TextInput7247c2bd: {
      borderRadius: 8,
      fontFamily: 'OpenSans_400Regular',
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View644faee4: {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 56,
      justifyContent: 'space-between',
      marginTop: 20,
      paddingLeft: 20,
      width: '100%',
    },
    View6d34ad1b: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-evenly',
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 20,
    },
    Viewa55eb6ad: {
      alignItems: 'center',
      backgroundColor: theme.colors['BG Gray'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Divider'],
      borderLeftWidth: 1,
      borderRadius: 16,
      borderRightWidth: 1,
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 56,
      justifyContent: 'space-between',
      marginTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      width: '100%',
    },
    Viewc97403d7: { flex: 1, paddingRight: 5 },
    Viewe70c2465: { flex: 1, paddingRight: 10 },
    Viewfbc072c8: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
  });

export default withTheme(UpdateProfileScreen);
