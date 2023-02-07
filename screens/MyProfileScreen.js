import React from 'react';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import Images from '../config/Images';
import {
  Circle,
  CircleImage,
  Divider,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const MyProfileScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [profileUrl, setProfileUrl] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <LodestarMobileApi.FetchGetMeGET>
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
            <>
              {/* Header */}
              <View style={styles(theme).Viewf7ba2333}>
                {/* Back */}
                <View>
                  {/* Back Button */}
                  <IconButton
                    onPress={() => {
                      try {
                        navigation.goBack();
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    icon={'Feather/arrow-left'}
                    size={32}
                    color={theme.colors['Text']}
                  />
                </View>
              </View>
              {/* Content */}
              <KeyboardAwareScrollView
                style={styles(theme).KeyboardAwareScrollView989db244}
                contentContainerStyle={
                  styles(theme).KeyboardAwareScrollViewb43fd2e0Content
                }
                showsVerticalScrollIndicator={true}
                keyboardShouldPersistTaps={'never'}
              >
                {/* Image */}
                <View style={styles(theme).Viewcec4bbbc}>
                  {/* Image Frame */}
                  <View style={styles(theme).View6e6a86f2}>
                    <Image
                      style={styles(theme).Image28901fc6}
                      resizeMode={'cover'}
                      source={Images.DALLE20230127005431}
                    />
                  </View>
                </View>
                {/* Body */}
                <View style={styles(theme).View63e52a04}>
                  {/* Avatar */}
                  <View style={styles(theme).View4a298bf0}>
                    <Circle bgColor={theme.colors.background} size={116}>
                      <CircleImage
                        size={100}
                        source={{ uri: `${fetchData?.profile_photo}` }}
                      />
                    </Circle>
                  </View>

                  <View style={styles(theme).Viewc9efef73}>
                    <View style={styles(theme).View80c88e51}>
                      {/* Name */}
                      <Text style={styles(theme).Text740c8b2f}>
                        {fetchData?.name}
                      </Text>
                      {/* company */}
                      <Text style={styles(theme).Textfa0304e3}>
                        {fetchData?.company_name}
                      </Text>
                      {/* Profession */}
                      <Text style={styles(theme).Textfa0304e3}>
                        {fetchData?.job_title}
                      </Text>
                    </View>
                  </View>
                  <Divider
                    style={styles(theme).Divider02f8ec45}
                    color={theme.colors.divider}
                  />
                  {/* About Me */}
                  <View style={styles(theme).View9e87cc55}>
                    {/* Heading */}
                    <Text style={styles(theme).Texta572b28f}>{'About Me'}</Text>
                    {/* Body */}
                    <Text style={styles(theme).Texta493f81b}>
                      {fetchData?.about_me}
                    </Text>
                  </View>
                  <Divider color={theme.colors.divider} />
                  {/* Career */}
                  <View style={styles(theme).View9e87cc55}>
                    {/* Heading */}
                    <Text style={styles(theme).Texta572b28f}>
                      {'Career Experiences'}
                    </Text>
                    {/* Body */}
                    <Text style={styles(theme).Texta493f81b}>
                      {fetchData?.career_history}
                    </Text>
                  </View>
                  <Divider color={theme.colors.divider} />
                  {/* Education */}
                  <View style={styles(theme).View9e87cc55}>
                    {/* Heading */}
                    <Text style={styles(theme).Texta572b28f}>
                      {'Education'}
                    </Text>
                    {/* Body */}
                    <Text style={styles(theme).Texta493f81b}>
                      {fetchData?.education}
                    </Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </>
          );
        }}
      </LodestarMobileApi.FetchGetMeGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Divider02f8ec45: { marginTop: 20 },
    Fetch431eb058: { minHeight: 40 },
    Image28901fc6: { height: 180, width: '100%' },
    KeyboardAwareScrollViewb43fd2e0Content: { paddingBottom: 48 },
    Text740c8b2f: { fontFamily: 'OpenSans_400Regular', fontSize: 20 },
    Text87249757: {
      color: theme.colors.strongInverse,
      fontFamily: 'System',
      fontSize: 20,
      fontWeight: '400',
    },
    Texta493f81b: {
      fontFamily: 'OpenSans_400Regular',
      lineHeight: 24,
      marginTop: 12,
    },
    Texta572b28f: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_400Regular',
      fontSize: 16,
    },
    Textfa0304e3: { fontFamily: 'OpenSans_400Regular', marginTop: 8 },
    View2bebe7d9: { alignItems: 'center', flex: 1, marginLeft: 16 },
    View4a298bf0: { alignItems: 'flex-start' },
    View63e52a04: { marginTop: -58, paddingLeft: 24, paddingRight: 24 },
    View6e6a86f2: { borderRadius: 24, overflow: 'hidden' },
    View80c88e51: { marginLeft: 3 },
    View9e87cc55: {
      borderBottomWidth: 1,
      borderColor: '"rgba(0, 0, 0, 0)"',
      borderLeftWidth: 1,
      borderRadius: 24,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
    Viewc9efef73: {
      alignContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    Viewcec4bbbc: { paddingLeft: 24, paddingRight: 24 },
    Viewf7ba2333: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 24,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 24,
    },
    screen: { backgroundColor: theme.colors['Custom Color_40'] },
  });

export default withTheme(MyProfileScreen);
