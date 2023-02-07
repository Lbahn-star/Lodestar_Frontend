import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AudioCallStartScreen from './screens/AudioCallStartScreen';
import CalendarPermissionsScreen from './screens/CalendarPermissionsScreen';
import CameraPermissionsScreen from './screens/CameraPermissionsScreen';
import ChannelDetailsCopyScreen from './screens/ChannelDetailsCopyScreen';
import ChannelDetailsScreen from './screens/ChannelDetailsScreen';
import CreateNewPasswordScreen from './screens/CreateNewPasswordScreen';
import EditChannelProfileScreen from './screens/EditChannelProfileScreen';
import FollowersScreen from './screens/FollowersScreen';
import FollowingScreen from './screens/FollowingScreen';
import ForgotPasswordCopyScreen from './screens/ForgotPasswordCopyScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GoLiveScreen from './screens/GoLiveScreen';
import InviteScreen from './screens/InviteScreen';
import MessageScreen from './screens/MessageScreen';
import MyChannelScreen from './screens/MyChannelScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import MyRoomsScreen_j5Jk7mIq from './screens/MyRoomsScreen_j5Jk7mIq';
import MyRoomsoldassmfScreen from './screens/MyRoomsoldassmfScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import VoiceCallsScreen from './screens/VoiceCallsScreen';
import VoicecallDetailScreen from './screens/VoicecallDetailScreen';
import WelcomescreenScreen from './screens/WelcomescreenScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
function LodeStar() {
  return (
    <Tab.Navigator
      initialRouteName="MyRoomsScreen"
      tabBarOptions={{
        labelPosition: 'below-icon',
        activeTintColor: theme.colors['Text'],
        inactiveTintColor: theme.colors['Light'],
      }}
    >
      <Tab.Screen
        name="VoiceCallsScreen"
        component={VoiceCallsScreen}
        options={{
          title: 'Voice Calls',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Feather/phone"
              size={25}
              color={focused ? theme.colors['Text'] : theme.colors['Light']}
            />
          ),
          tabBarLabel: 'Calls',
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/settings-outline"
              size={25}
              color={focused ? theme.colors['Text'] : theme.colors['Light']}
            />
          ),
          tabBarLabel: 'Settings',
        }}
      />
      <Tab.Screen
        name="MyRoomsScreen_j5Jk7mIq"
        component={MyRoomsScreen_j5Jk7mIq}
        options={{
          title: 'My Rooms',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/people-outline"
              size={25}
              color={focused ? theme.colors['Text'] : theme.colors['Light']}
            />
          ),
          tabBarLabel: 'My Rooms',
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="WelcomescreenScreen"
        screenOptions={{
          headerTitleAlign: 'left',
          headerTitleAllowFontScaling: false,
          headerTransparent: false,
          cardShadowEnabled: true,
        }}
      >
        <Stack.Screen
          name="WelcomescreenScreen"
          component={WelcomescreenScreen}
          options={{ title: 'Welcome screen' }}
        />
        <Stack.Screen
          name="AudioCallStartScreen"
          component={AudioCallStartScreen}
          options={{ title: 'Audio Call Start' }}
        />
        <Stack.Screen
          name="EditChannelProfileScreen"
          component={EditChannelProfileScreen}
          options={{ title: 'Edit Channel Profile' }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ title: 'Sign up' }}
        />
        <Stack.Screen
          name="UpdateProfileScreen"
          component={UpdateProfileScreen}
          options={{ title: 'Update Profile' }}
        />
        <Stack.Screen
          name="FollowersScreen"
          component={FollowersScreen}
          options={{ title: 'Followers' }}
        />
        <Stack.Screen
          name="FollowingScreen"
          component={FollowingScreen}
          options={{ title: 'Following' }}
        />
        <Stack.Screen
          name="CalendarPermissionsScreen"
          component={CalendarPermissionsScreen}
          options={{ title: 'Calendar Permissions' }}
        />
        <Stack.Screen
          name="CameraPermissionsScreen"
          component={CameraPermissionsScreen}
          options={{ title: 'Camera Permissions' }}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ title: 'Message' }}
        />
        <Stack.Screen
          name="GoLiveScreen"
          component={GoLiveScreen}
          options={{ title: 'Go Live' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
          options={{ title: 'Notifications' }}
        />
        <Stack.Screen
          name="InviteScreen"
          component={InviteScreen}
          options={{ title: 'Invite' }}
        />
        <Stack.Screen
          name="VoicecallDetailScreen"
          component={VoicecallDetailScreen}
          options={{ title: 'Voicecall Detail' }}
        />
        <Stack.Screen
          name="MyProfileScreen"
          component={MyProfileScreen}
          options={{ title: 'My Profile' }}
        />
        <Stack.Screen
          name="ChannelDetailsScreen"
          component={ChannelDetailsScreen}
          options={{ title: 'Channel Details' }}
        />
        <Stack.Screen
          name="MyChannelScreen"
          component={MyChannelScreen}
          options={{ title: 'My Channel' }}
        />
        <Stack.Screen
          name="ChannelDetailsCopyScreen"
          component={ChannelDetailsCopyScreen}
          options={{ title: 'Channel Details Copy' }}
        />
        <Stack.Screen
          name="SigninScreen"
          component={SigninScreen}
          options={{ title: 'Signin' }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen
          name="CreateNewPasswordScreen"
          component={CreateNewPasswordScreen}
          options={{ title: 'Create New Password' }}
        />
        <Stack.Screen
          name="ForgotPasswordCopyScreen"
          component={ForgotPasswordCopyScreen}
          options={{ title: 'Forgot Password Copy' }}
        />
        <Stack.Screen name="LodeStar" component={LodeStar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
