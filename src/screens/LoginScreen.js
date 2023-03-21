import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const onLogin = () => {
    if (email !== "" && password !== "") {
      Keyboard.dismiss();
      console.log(email, password);
    } else {
      setIsShowKeyboard(false);
      return alert("Fill in all the fields!!!");
    }
    setEmail("");
    setPassword("");
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const onChange = () => {
      const { width, height } = Dimensions.get("window");
      setOrientation(width > height ? "landscape" : "portrait");
    };

    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.wrapper}>
        <ImageBackground
          style={styles.image}
          source={require("../images/photoBG.jpg")}
        >
          <View style={styles.container}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <Text
                  style={{
                    ...styles.inputTitle,
                    marginBottom: orientation === "portrait" ? 32 : 5,
                  }}
                >
                  Login
                </Text>

                <TextInput
                  style={{
                    ...styles.input,
                    marginBottom: orientation === "portrait" ? 16 : 4,
                  }}
                  value={email}
                  onChangeText={emailHandler}
                  placeholder="Email"
                  placeholderTextColor="#BDBDBD"
                  autoCapitalize="none"
                  autoComplete="email"
                />
                <View>
                  <TextInput
                    style={{
                      ...styles.input,
                      marginBottom: orientation === "portrait" ? 16 : 4,
                    }}
                    secureTextEntry={hidePassword}
                    value={password}
                    onChangeText={passwordHandler}
                    placeholder="Password"
                    onFocus={() => {
                      setIsShowKeyboard(true);
                    }}
                  />
                  {password.length > 0 && (
                    <TouchableOpacity
                      style={styles.show}
                      onPress={toggleHidePassword}
                    >
                      <Text style={{ color: "#1B4371" }}>
                        {hidePassword ? "Show" : "Hide"}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>

                <TouchableOpacity
                  style={{
                    ...styles.button,
                    marginTop: orientation === "portrait" ? 27 : 4,
                  }}
                  activeOpacity={0.7}
                  onPress={onLogin}
                >
                  <Text style={styles.btnTitle}>Login</Text>
                </TouchableOpacity>
                <View>
                  <Text style={styles.loginText}>
                    Don't have an account?{" "}
                    <Text
                      style={{ color: "#FF6C00" }}
                    >
                      Register
                    </Text>
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    flex: 0.6,
    justifyContent: "center",
  },

  form: {
    marginHorizontal: 16,
  },
  inputTitle: {
    marginTop: 32,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "roboto-medium",
  },
  input: {
    height: 50,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    fontFamily: "roboto-regular",
    color: "#212121",
  },

  show: {
    position: "absolute",
    right: 15,
    bottom: 30,
  },

  button: {
    height: 50,
    marginBottom: 16,
    padding: 14,
    borderRadius: 26,
    backgroundColor: "#FF6C00",
  },
  btnTitle: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "roboto-regular",
  },
  loginText: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "roboto-regular",
    color: "#1B4371",
  },
});
