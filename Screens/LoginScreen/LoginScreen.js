import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import {
  container,
  backgroundImage,
  authorizeContainer,
  title,
  input,
  passwordButton,
  passwordButtonText,
  button,
  buttonText,
  registrationButton,
  registrationButtonText,
} from "./LoginScreenStyle";

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ImageBackground
          style={backgroundImage}
          source={require("../../assets/img/photoBackground.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={authorizeContainer}>
              <Text style={title}>Увійти</Text>
              <View>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType="email-address"
                  />
                </View>
                <View style={{ marginBottom: 43, position: "relative" }}>
                  <TextInput
                    style={input}
                    placeholder="Пароль"
                    placeholderTextColor={"#BDBDBD"}
                    secureTextEntry={true}
                  />
                  <TouchableOpacity style={passwordButton}>
                    <Text style={passwordButtonText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={button}>
                  <Text style={buttonText}>Увійти</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={registrationButton}>
                <Text style={registrationButtonText}>
                  Немає акаунту?
                  <Text style={{ textDecorationLine: "underline" }}>
                    Зареєструватися
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
