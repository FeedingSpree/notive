import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Notive from "../assets/notive.png"; // make sure to have your logo here


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Header Logo */}
      <View style={styles.header}>
        <Image source={Notive} style={styles.logo} resizeMode="contain" />
      </View>

      {/* Card Body */}
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#7e57c2"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#7e57c2"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Homepage")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
            No account yet?{" "}
          <Text style={styles.join} onPress={() => navigation.navigate("SignUp")}>
            Join Us!
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "35%",
    backgroundColor: "#9B59B6",
    borderBottomLeftRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 140,
  },
  card: {
    backgroundColor: "#fff",
    width: "85%",
    marginTop: -40,
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4a148c",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#9b59b6",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 14,
    color: "#333",
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#6A1B9A",
    fontWeight: "600",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#9B59B6",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    shadowColor: "#9B59B6",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#333",
  },
  join: {
    color: "#6A1B9A",
    fontWeight: "600",
  },
});
