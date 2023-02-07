import React from 'react';
import * as LodestarMobileApi from '../apis/LodestarMobileApi.js';
import Images from '../config/Images';
import {
  Button,
  Checkbox,
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

const ProfileScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
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
            color={theme.colors['Community_Medium_Black']}
          />
        </View>
        {/* Actions */}
        <View style={styles(theme).Viewa2a176c9}>
          {/* Bookmark */}
          <Checkbox
            checkedIcon={'Ionicons/ios-bookmark'}
            uncheckedIcon={'Ionicons/ios-bookmark-outline'}
            size={28}
            uncheckedColor={theme.colors['Community_Medium_Black']}
            color={theme.colors['Community_Medium_Black']}
          />
        </View>
      </View>

      <LodestarMobileApi.FetchGetPublicUserGET username={'ash'}>
        {({ loading, error, data, refetchGetPublicUser }) => {
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
                      <Text style={styles(theme).Text4d06e7e4}>
                        {fetchData?.name}
                      </Text>
                      {/* Profession */}
                      <Text style={styles(theme).Text69b7ce6d}>
                        {fetchData?.company_name}
                      </Text>
                      {/* Profession */}
                      <Text style={styles(theme).Text69b7ce6d}>
                        {fetchData?.job_title}
                      </Text>
                    </View>
                    <Button
                      onPress={() => {
                        try {
                          navigation.navigate('InviteScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={styles(theme).Button094b85bd}
                      title={'Invite'}
                    />
                  </View>
                  {/* Stats */}
                  <View style={styles(theme).View9315e32b}>
                    {/* Courses */}
                    <View style={styles(theme).View90907409}>
                      {/* Stat */}
                      <Text style={styles(theme).Text3808b400}>{'30'}</Text>
                      {/* Label */}
                      <Text style={styles(theme).Textd7314925}>
                        {'Courses'}
                      </Text>
                    </View>
                    {/* Students */}
                    <View style={styles(theme).View90907409}>
                      {/* Stat */}
                      <Text style={styles(theme).Text3808b400}>{'11,234'}</Text>
                      {/* Label */}
                      <Text style={styles(theme).Textd7314925}>
                        {'Students'}
                      </Text>
                    </View>
                    {/* Reviews */}
                    <View style={styles(theme).Viewbf78ff24}>
                      {/* Stat */}
                      <Text style={styles(theme).Text3808b400}>{'3,963'}</Text>
                      {/* Label */}
                      <Text style={styles(theme).Textd7314925}>
                        {'Reviews'}
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
                    <Text style={styles(theme).Text8740dc95}>{'About Me'}</Text>
                    {/* Body */}
                    <Text style={styles(theme).Textdee6c348}>
                      {fetchData?.about_me}
                    </Text>
                  </View>
                  <Divider color={theme.colors.divider} />
                  {/* Career */}
                  <View style={styles(theme).View9e87cc55}>
                    {/* Heading */}
                    <Text style={styles(theme).Text8740dc95}>
                      {'Career Experiences'}
                    </Text>
                    {/* Body */}
                    <Text style={styles(theme).Textdee6c348}>
                      {fetchData?.career_history}
                    </Text>
                  </View>
                  <Divider color={theme.colors.divider} />
                  {/* Education */}
                  <View style={styles(theme).View9e87cc55}>
                    {/* Heading */}
                    <Text style={styles(theme).Text8740dc95}>
                      {'Education'}
                    </Text>
                    {/* Body */}
                    <Text style={styles(theme).Textdee6c348}>
                      {fetchData?.education}
                    </Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </>
          );
        }}
      </LodestarMobileApi.FetchGetPublicUserGET>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button094b85bd: {
      backgroundColor: '"rgba(0, 0, 0, 0)"',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderColor: theme.colors['Border Color'],
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      color: theme.colors['Custom Color'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 10,
      opacity: 1,
      textAlign: 'center',
    },
    Divider02f8ec45: { marginTop: 20 },
    Fetch431eb058: { minHeight: 40 },
    Image28901fc6: { height: 180, width: '100%' },
    KeyboardAwareScrollViewb43fd2e0Content: { paddingBottom: 48 },
    Text3808b400: {
      color: theme.colors['Custom Color'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 24,
    },
    Text4d06e7e4: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'ABeeZee_400Regular',
      fontSize: 20,
    },
    Text69b7ce6d: {
      color: theme.colors['Community_Dark_UI'],
      fontFamily: 'ABeeZee_400Regular',
      marginTop: 8,
    },
    Text87249757: {
      color: theme.colors.strongInverse,
      fontFamily: 'System',
      fontSize: 20,
      fontWeight: '400',
    },
    Text8740dc95: { fontFamily: 'System', fontSize: 16, fontWeight: '600' },
    Textd7314925: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '400',
      marginTop: 6,
    },
    Textdee6c348: {
      fontFamily: 'System',
      fontWeight: '400',
      lineHeight: 24,
      marginTop: 12,
    },
    View2bebe7d9: { alignItems: 'center', flex: 1, marginLeft: 16 },
    View4a298bf0: { alignItems: 'flex-start' },
    View63e52a04: { marginTop: -58, paddingLeft: 24, paddingRight: 24 },
    View6e6a86f2: { borderRadius: 24, overflow: 'hidden' },
    View80c88e51: { marginLeft: 3 },
    View90907409: {
      alignItems: 'center',
      borderColor: theme.colors['Medium'],
      borderRightWidth: 1,
      flex: 1,
      justifyContent: 'center',
    },
    View9315e32b: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 24,
    },
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
    Viewa2a176c9: { flexDirection: 'row', marginLeft: 8 },
    Viewbf78ff24: { alignItems: 'center', flex: 1, justifyContent: 'center' },
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
    screen: { backgroundColor: theme.colors['Background'] },
  });

export default withTheme(ProfileScreen);
