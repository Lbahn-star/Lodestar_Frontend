import React from 'react';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasTopSafeArea={true}
      hasSafeArea={false}
    >
      {/* Header */}
      <View style={styles(theme).View5d4d572f}>
        {/* Screen Heading */}
        <Text style={styles(theme).Text386c7773}>{'Settings'}</Text>
        {/* Notifications */}
        <View style={styles(theme).View53f79c36}>
          <View style={styles(theme).View51144c25}>
            <Touchable style={styles(theme).Touchableae2a1965}>
              <Circle bgColor={theme.colors['Background']} size={30}>
                <Icon
                  size={24}
                  name={'Ionicons/notifications-outline'}
                  color={theme.colors['Text']}
                />
              </Circle>
              {/* Red badge */}
              <View style={styles(theme).View247aa35b}>
                <Circle bgColor={theme.colors['Custom Color_8']} size={9} />
              </View>
            </Touchable>
          </View>
        </View>
      </View>

      <Touchable
        onPress={() => {
          try {
            navigation.navigate('MyProfileScreen');
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {/* User Details */}
        <View style={styles(theme).Viewbea7093a}>
          {/* Details */}
          <View style={styles(theme).View5cf968ba}>
            {/* Name */}
            <Text style={styles(theme).Textf3d489d6}>{'Arvind Limba'}</Text>
            {/* Email */}
            <Text style={styles(theme).Textc136d647}>
              {'alimba@draftbit.com'}
            </Text>
          </View>
          {/* User Image */}
          <Circle size={50} bgColor={theme.colors.light}>
            <Image
              style={styles(theme).Image8dbb3d0d}
              resizeMode={'cover'}
              source={{
                uri: 'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-001.jpg',
              }}
            />
          </Circle>
        </View>
      </Touchable>
      {/* Menu Scroll */}
      <ScrollView
        style={styles(theme).ScrollView989db244}
        contentContainerStyle={styles(theme).ScrollView8bb1c4abContent}
        showsVerticalScrollIndicator={true}
        bounces={false}
      >
        {/* Account */}
        <Touchable>
          <View style={styles(theme).Viewc948ba1c}>
            <View>
              <Icon
                size={24}
                name={'FontAwesome/user-o'}
                color={theme.colors['Text']}
              />
            </View>

            <View style={styles(theme).View736d06a6}>
              {/* Title */}
              <Text style={styles(theme).Text47cf720a}>{'Account'}</Text>
              {/* Description */}
              <Text style={styles(theme).Text0e05aaa2} numberOfLines={1}>
                {'Privacy, Change Number '}
              </Text>
            </View>

            <View style={styles(theme).Viewc65acab6}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_36']}
              />
            </View>
          </View>
        </Touchable>
        {/* Chat */}
        <Touchable>
          <View style={styles(theme).Viewc948ba1c}>
            <View>
              <Icon
                size={24}
                name={'Ionicons/chatbox-ellipses-outline'}
                color={theme.colors['Text']}
              />
            </View>

            <View style={styles(theme).View736d06a6}>
              {/* Title */}
              <Text style={styles(theme).Text47cf720a}>{'Chat'}</Text>
              {/* Description */}
              <Text style={styles(theme).Text0e05aaa2} numberOfLines={1}>
                {'Theme, walpaper, chat history'}
              </Text>
            </View>

            <View style={styles(theme).Viewc65acab6}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_36']}
              />
            </View>
          </View>
        </Touchable>
        {/* New group */}
        <Touchable>
          <View style={styles(theme).Viewc948ba1c}>
            <View>
              <Icon
                size={24}
                name={'MaterialIcons/people-outline'}
                color={theme.colors['Text']}
              />
            </View>

            <View style={styles(theme).View736d06a6}>
              {/* Title */}
              <Text style={styles(theme).Text47cf720a}>{'New Group'}</Text>
              {/* Description */}
              <Text style={styles(theme).Text0e05aaa2} numberOfLines={1}>
                {'Create Group from Contacts'}
              </Text>
            </View>

            <View style={styles(theme).Viewc65acab6}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_36']}
              />
            </View>
          </View>
        </Touchable>
        {/* Security */}
        <Touchable>
          <View style={styles(theme).Viewc948ba1c}>
            <View>
              <Icon
                size={24}
                name={'SimpleLineIcons/lock-open'}
                color={theme.colors['Text']}
              />
            </View>

            <View style={styles(theme).View736d06a6}>
              {/* Title */}
              <Text style={styles(theme).Text47cf720a}>{'Security'}</Text>
              {/* Description */}
              <Text style={styles(theme).Text0e05aaa2} numberOfLines={1}>
                {'Change Password'}
              </Text>
            </View>

            <View style={styles(theme).Viewc65acab6}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_36']}
              />
            </View>
          </View>
        </Touchable>
        {/* Notifications */}
        <Touchable>
          <View style={styles(theme).Viewc948ba1c}>
            <View>
              <Icon
                size={24}
                name={'Ionicons/ios-notifications-outline'}
                color={theme.colors['Text']}
              />
            </View>

            <View style={styles(theme).View736d06a6}>
              {/* Title */}
              <Text style={styles(theme).Text47cf720a}>{'Notification'}</Text>
              {/* Description */}
              <Text style={styles(theme).Text0e05aaa2} numberOfLines={1}>
                {'Message, group, ringtone'}
              </Text>
            </View>

            <View style={styles(theme).Viewc65acab6}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_36']}
              />
            </View>
          </View>
        </Touchable>
        {/* Help */}
        <Touchable>
          <View style={styles(theme).Viewc948ba1c}>
            <View>
              <Icon
                size={24}
                name={'AntDesign/questioncircleo'}
                color={theme.colors['Text']}
              />
            </View>

            <View style={styles(theme).View736d06a6}>
              {/* Title */}
              <Text style={styles(theme).Text47cf720a}>{'Help'}</Text>
              {/* Description */}
              <Text style={styles(theme).Text0e05aaa2} numberOfLines={1}>
                {'Help center, contact us, privacy policy '}
              </Text>
            </View>

            <View style={styles(theme).Viewc65acab6}>
              <Icon
                size={24}
                name={'Entypo/chevron-right'}
                color={theme.colors['Custom Color_36']}
              />
            </View>
          </View>
        </Touchable>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Image8dbb3d0d: { height: 50, width: 50 },
    ScrollView8bb1c4abContent: {
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    Text0e05aaa2: {
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 13,
      lineHeight: 20,
      marginTop: 4,
      opacity: 0.5,
    },
    Text386c7773: {
      color: theme.colors['Text'],
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 25,
    },
    Text47cf720a: {
      color: theme.colors['Text'],
      fontFamily: 'Poppins_500Medium',
      fontSize: 15,
      lineHeight: 20,
      marginTop: 4,
      opacity: 1,
    },
    Textc136d647: {
      color: theme.colors['Custom Color_37'],
      fontFamily: 'Poppins_400Regular',
      fontSize: 12,
      marginTop: 6,
    },
    Textf3d489d6: {
      color: theme.colors['Community_Medium_Black'],
      fontFamily: 'Poppins_500Medium',
      fontSize: 15,
    },
    Touchableae2a1965: { borderColor: theme.colors['Text'] },
    View247aa35b: { position: 'absolute', right: 3, top: 0, zIndex: 2 },
    View51144c25: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: theme.colors['Background'],
      borderLeftWidth: 0.5,
      borderRadius: 17.5,
      borderRightWidth: 0.5,
      borderTopWidth: 0.5,
      height: 35,
      justifyContent: 'center',
      width: 35,
    },
    View53f79c36: {
      alignItems: 'center',
      height: 48,
      justifyContent: 'center',
      width: 48,
    },
    View5cf968ba: { flex: 1, justifyContent: 'center' },
    View5d4d572f: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 48,
      justifyContent: 'space-between',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
    },
    View736d06a6: { flex: 1, marginLeft: 21, marginRight: 20 },
    Viewbea7093a: {
      alignItems: 'center',
      borderRadius: 24,
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 20,
      marginRight: 20,
      paddingBottom: 20,
      paddingTop: 20,
    },
    Viewc65acab6: { alignItems: 'flex-end' },
    Viewc948ba1c: {
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderColor: theme.colors['Custom Color_27'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 18,
      paddingTop: 18,
    },
    screen: { backgroundColor: theme.colors['Background'], height: '100%' },
  });

export default withTheme(SettingsScreen);
