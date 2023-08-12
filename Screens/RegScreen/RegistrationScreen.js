import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  container,
  backgroundImage,
  registrationContainer,
  avatarContainer,
  avatar,
  addAvatarButton,
  title,
  input,
  showPasswordButton,
  showPasswordButtonText,
  button,
  buttonText,
  logInText,
} from "./RegScreenStyles";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
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
            <View style={registrationContainer}>
              <View style={avatarContainer}>
                <Image style={avatar} />
                <TouchableOpacity style={addAvatarButton}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={title}>Реєстрація</Text>
              <View style={{ marginBottom: 16 }}>
                <View>
                  <TextInput
                    placeholder="Логін"
                    style={{ ...input, marginBottom: 16 }}
                  />
                </View>
                <View>
                  <TextInput
                    placeholder="Адреса електронної пошти"
                    style={{ ...input, marginBottom: 16 }}
                    keyboardType="email-address"
                  />
                </View>
                <View style={{ marginBottom: 43, position: "relative" }}>
                  <TextInput
                    placeholder="Пароль"
                    style={input}
                    secureTextEntry={true}
                  />
                  <TouchableOpacity style={showPasswordButton}>
                    <Text style={showPasswordButtonText}>Показати</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={button}>
                  <Text style={buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={logInText}>Вже є акаунт? Увійти</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
