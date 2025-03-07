import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import RtcEngine, { ClientRole, ChannelProfile } from 'react-native-agora';
// import requestCameraAndAudioPermission from './components/Permission';
// import styles from './components/Style';
import RtmEngine from 'agora-react-native-rtm';

/**
 * @property appId Agora App ID
 * @property token Token for the channel;
 * @property isHost Boolean value to select between broadcaster and audience
 * @property channelName Channel Name for the current session
 * @property joinSucceed State variable for storing success
 * @property rtcUid local user's UID on joining the RTC channel
 * @property peerIds Array for storing connected peers
 * @property myUsername local user's name to login to RTM
 * @property Array to store usernames mapped to RTC UIDs
 */

async function requestCameraAndAudioPermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ]);
    if (
      granted['android.permission.RECORD_AUDIO'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.CAMERA'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the cameras & mic');
    } else {
      console.log('Permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

const AgoraAudioCallScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  // const [appId, setOptionsMenu] = React.useState(false);
  // const [selectedTab, setSelectedTab] = React.useState('home');

  // _rtcEngine?: RtcEngine;
  // _rtmEngine?: RtmEngine;

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       appId: 'e0990c3fb1d84e44b25273c30fcf4769',
  //       token: "007eJxTYNi9/NOZb21rsr/F3X0kMu9ZZWdX+b2/s7Q2PTv9wGreGdOTCgypBpaWBsnGaUmGKRYmqSYmSUamRubGycYGaclpJuZmlqy+t5MbAhkZzqisYGRkgEAQn5EhkYEBAI0sIvA=",
  //       isHost: true,
  //       channelName: 'a',
  //       joinSucceed: false,
  //       rtcUid: parseInt((new Date().getTime() + '').slice(4, 13), 10),
  //       peerIds: [],
  //       myUsername: 'me',
  //       usernames: {},
  //     };
  //     if (Platform.OS === 'android') {
  //       // Request required permissions from Android
  //       requestCameraAndAudioPermission().then(() => {
  //         console.log('requested!');
  //       });
  //     }
  //   }

  //   componentDidMount() = () => {
  //     this.initRTC();
  //     this.initRTM();
  //   }

  //   componentWillUnmount() = () => {
  //     this._rtmEngine?.destroyClient();
  //     this._rtcEngine?.destroy();
  //   }

  //   /**
  //    * @name initRTC
  //    * @description Function to initialize the Rtc Engine, attach event listeners and actions
  //    */
  //   initRTC = async () => {
  //     const { appId, isHost } = this.state;
  //     this._rtcEngine = await RtcEngine.create(appId);
  //     // await this._rtcEngine.disableVideo();
  //     await this._rtcEngine.setChannelProfile(ChannelProfile.LiveBroadcasting);
  //     await this._rtcEngine.setClientRole(
  //       isHost ? ClientRole.Broadcaster : ClientRole.Audience
  //     );

  //     this._rtcEngine.addListener('Error', (err) => {
  //       console.log('Error', err);
  //     });

  //     this._rtcEngine.addListener('UserJoined', (uid, elapsed) => {
  //       console.log('UserJoined', uid, elapsed);
  //       // Get current peer IDs
  //       const { peerIds } = this.state;
  //       // If new user
  //       if (peerIds.indexOf(uid) === -1) {
  //         this.setState({
  //           // Add peer ID to state array
  //           peerIds: [...peerIds, uid],
  //         });
  //       }
  //     });

  //     this._rtcEngine.addListener('UserOffline', (uid, reason) => {
  //       console.log('UserOffline', uid, reason);
  //       const { peerIds } = this.state;
  //       this.setState({
  //         // Remove peer ID from state array
  //         peerIds: peerIds.filter((id) => id !== uid),
  //       });
  //     });

  //     // If Local user joins RTC channel
  //     this._rtcEngine.addListener(
  //       'JoinChannelSuccess',
  //       (channel, uid, elapsed) => {
  //         console.log('JoinChannelSuccess', channel, uid, elapsed);
  //         this.setState({
  //           joinSucceed: true,
  //           rtcUid: uid,
  //         });
  //       }
  //     );
  //   };

  /**
   * @name initRTM
   * @description Function to initialize the Rtm Engine, attach event listeners and use them to sync usernames
   */
  initRTM = async () => {
    let { appId, usernames, rtcUid } = this.state;
    this._rtmEngine = new RtmEngine();

    this._rtmEngine.on('error', evt => {
      console.log(evt);
    });

    this._rtmEngine.on('channelMessageReceived', evt => {
      let { text } = evt;
      let data = text.split(':');
      console.log('cmr', evt);
      if (data[1] === '!leave') {
        let temp = JSON.parse(JSON.stringify(usernames));
        Object.keys(temp).map(k => {
          if (k === data[0]) delete temp[k];
        });
        this.setState({
          usernames: temp,
        });
      } else {
        this.setState({
          usernames: { ...usernames, [data[0]]: data[1] },
        });
      }
    });

    this._rtmEngine.on('messageReceived', evt => {
      let { text } = evt;
      let data = text.split(':');
      console.log('pm', evt);
      this.setState({
        usernames: { ...usernames, [data[0]]: data[1] },
      });
    });

    this._rtmEngine.on('channelMemberJoined', evt => {
      console.log('!spm', this.state.myUsername);
      this._rtmEngine?.sendMessageToPeer({
        peerId: evt.uid,
        text: rtcUid + ':' + this.state.myUsername,
        offline: false,
      });
    });

    await this._rtmEngine.createClient(appId).catch(e => console.log(e));
  };

  /**
   * @name toggleRole
   * @description Function to toggle the roll between broadcaster and audience
   */
  toggleRole = async () => {
    this._rtcEngine?.setClientRole(
      !this.state.isHost ? ClientRole.Broadcaster : ClientRole.Audience
    );
    this.setState(ps => {
      return { isHost: !ps.isHost };
    });
  };

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    let { myUsername, token, channelName, rtcUid } = this.state;
    if (myUsername) {
      // Join RTC Channel using null token and channel name
      await this._rtcEngine?.joinChannel(token, channelName, null, rtcUid);
      // Login & Join RTM Channel
      await this._rtmEngine
        ?.login({ uid: myUsername })
        .catch(e => console.log(e));
      await this._rtmEngine
        ?.joinChannel(channelName)
        .catch(e => console.log(e));
      await this._rtmEngine
        ?.sendMessageByChannelId(channelName, rtcUid + ':' + myUsername)
        .catch(e => console.log(e));
    }
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    let { channelName, rtcUid } = this.state;
    await this._rtcEngine?.leaveChannel();
    await this._rtmEngine
      ?.sendMessageByChannelId(channelName, rtcUid + ':!leave')
      .catch(e => console.log(e));
    this.setState({ peerIds: [], joinSucceed: false, usernames: {} });
    await this._rtmEngine?.logout().catch(e => console.log(e));
  };

  _renderUsers = () => {
    const { joinSucceed, peerIds, isHost, usernames, myUsername } = this.state;

    return joinSucceed ? (
      <View style={styles.fullView}>
        <Text style={styles.subHeading}>Broadcaster List</Text>
        {isHost ? <Text>{myUsername}</Text> : <></>}
        <ScrollView>
          {peerIds.map((value, index) => {
            return <Text key={index}>{usernames[value + '']}</Text>;
          })}
        </ScrollView>
        <Text style={styles.subHeading}>Audience List</Text>
        {!isHost ? <Text>{myUsername}</Text> : <></>}
        <ScrollView>
          {Object.keys(usernames).map((key, index) => {
            return (
              <Text key={index}>
                {peerIds.includes(parseInt(key, 10)) ? null : usernames[key]}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    ) : null;
  };

  const { joinSucceed, isHost, channelName, myUsername } = this.state;

  return (
    <View style={styles.max}>
      <View style={styles.spacer}>
        <Text style={styles.roleText}>
          You're{' '}
          <Text style={styles.roleTextBold}>
            {isHost ? 'a broadcaster' : 'the audience'}
          </Text>
        </Text>
        <Text style={styles.roleText}>
          {joinSucceed
            ? "You're connected to " + channelName
            : "You're disconnected - start call"}
        </Text>
      </View>
      {this._renderUsers()}
      {joinSucceed ? (
        <></>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder={'Name'}
            onChangeText={t => {
              this.setState({ myUsername: t });
            }}
            value={myUsername}
          />
          {!myUsername ? (
            <Text style={styles.errorText}>Name can't be blank</Text>
          ) : null}
        </>
      )}
      <View style={styles.buttonHolder}>
        <TouchableOpacity onPress={this.toggleRole} style={styles.button}>
          <Text style={styles.buttonText}> Toggle Role </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.startCall} style={styles.button}>
          <Text style={styles.buttonText}> Start Call </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.endCall} style={styles.button}>
          <Text style={styles.buttonText}> End Call </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    max: {
      flex: 1,
      // marginVertical: 40,
      backgroundColor: '#F7F7F7',
    },
    buttonHolder: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    button: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: '#38373A',
      // borderRadius: 24,
    },
    buttonRed: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      // backgroundColor: '#F4061D',
      borderRadius: 24,
    },
    buttonGreen: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      // backgroundColor: '#09DF18',
      borderRadius: 24,
    },
    buttonText: {
      color: '#fff',
    },
    fullView: {
      flex: 5,
      alignContent: 'center',
      marginHorizontal: 24,
    },
    centerText: {
      textAlign: 'center',
    },
    subHeading: {
      fontSize: 16,
      fontWeight: '700',
    },
    remote: {
      width: 150,
      height: 150,
      marginHorizontal: 2.5,
    },
    noUserText: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      color: '#0093E9',
    },
    roleText: {
      textAlign: 'center',
      // fontWeight: '700',
      color: '#fbfbfb',
      fontSize: 18,
    },
    roleTextBold: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: '700',
    },
    roleTextRed: {
      textAlign: 'center',
      fontSize: 18,
      // color: '#F4061D',
    },
    spacer: {
      width: '100%',
      padding: '2%',
      marginBottom: 32,
      // borderWidth: 1,
      backgroundColor: '#38373A',
      color: '#fbfbfb',
      // borderColor: '#38373A',
    },
    input: {
      height: 40,
      borderColor: '#38373A',
      borderWidth: 1.5,
      width: '90%',
      alignSelf: 'center',
      padding: 10,
    },
    errorText: { textAlign: 'center', margin: 5, color: '#38373A' },
  });

export default withTheme(AgoraAudioCallScreen);
