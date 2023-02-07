// This import is required if you are defining react components in this module.
import React, { useState, useEffect } from 'react';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <SelectImage.SelectImageComponent />

export function SelectImageComponent() {
  const [imageURI, setImageURI] = useState('');

  // trigger the handler method as soon as the function component
  // SelectImage is mounted
  useEffect(() => {
    onHandlePermission();
  }, []);

  // promot a dialog box by asking for a user's permission
  // to allow the app to open the phone's library
  // and select the image
  const onHandlePermission = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    // if permissions are not granted, display an alert box
    if (permissionResult.granted === false) {
      alert('Permission to access Photos is required!');
      return;
    }
  };
  const onSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageURI(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      navigation.navigate('MyProfileScreen');
    } catch (err) {
      console.error(err);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    imageContainer: {
      paddingVertical: 10,
    },
    image: {
      width: 300,
      height: 300,
      borderRadius: 4,
      backgroundColor: '#d7d7d7',
    },
    button: {
      marginTop: 20,
      borderRadius: 8,
      padding: 10,
      height: 44,
      backgroundColor: '#5A45FF',
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
    },
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageURI }} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={onSelectImage}>
        <Text style={styles.buttonText}>Select Picture</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={uploadImage}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
