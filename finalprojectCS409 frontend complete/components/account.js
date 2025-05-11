import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Notive from "../assets/notive.png";
import DefaultPic from "../assets/default.jpg";
import { Feather } from '@expo/vector-icons';

const Account = ({ navigation }) => {
  const [username, setUsername] = useState("Your username");
  const [email, setEmail] = useState("youremail@email.com");
  const [password, setPassword] = useState("yourpassword1234");
  const [profilePic, setProfilePic] = useState(null);

  const pickImage = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Permission required", "We need access to your gallery!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    Alert.alert("Success", "Information Saved!!");
    navigation.navigate("Homepage");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={Notive} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Profile Picture */}
      <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
        <Image 
          source={profilePic ? { uri: profilePic } : DefaultPic}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <Text style={styles.label}>Click to change image</Text>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Personal Information</Text>

        {/* Username Field */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
            />
            <Feather name="edit-2" size={18} color="#7e57c2" />
          </View>
        </View>

        {/* Email Field */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
            />
            <Feather name="edit-2" size={18} color="#7e57c2" />
          </View>
        </View>

        {/* Password Field */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry
              onChangeText={setPassword}
            />
            <Feather name="edit-2" size={18} color="#7e57c2" />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: "30%",
    backgroundColor: "#8e44ad",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 80,
    marginTop: 40,
  },
  avatarContainer: {
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    width: "85%",
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e3370",
    marginBottom: 20,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#5e3370",
    marginBottom: 5,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9b59b6",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    color: "#333",
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: "#8e44ad",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
