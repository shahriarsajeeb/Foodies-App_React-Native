import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
import {auth} from "../../firebase";

export default function SignUpScreen({navigation}) {
  const [click, setClick] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const handleSignup = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
      ToastAndroid.showWithGravity(
        "User created Sucessfully😍",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM)
    }) 
    .catch(error => 
      ToastAndroid.showWithGravity(
      (error.message),
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM)
    );
  }

  return (
    <View
      style={{
        height: height * 1,
        width: width * 1,
        backgroundColor: '#f5f5f5',
        justifyContent:"space-between",
        paddingBottom:30,
      }}>
      <View
        style={{
          height: height / 1.6,
        }}>
        <ImageBackground
          source={require('../Assests/images/1.jpg')}
          style={{
            flex: 1,
          }}
          resizeMode="cover"></ImageBackground>
      </View>
      <View
        style={{
          width: width * 1 - 50,
          height: height / 2 - 10,
          backgroundColor: '#fff',
          position: 'absolute',
          top: height / 4 + 50,
          left: width / 8 - 20,
          elevation: 8,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          Sign Up
        </Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="John doe..."
            value={name}
            onChangeText={setName}
            placeholderTextColor="#333"
            textContentType="name"
            style={styles.input}
          />
          <TextInput
            placeholder="yourmail@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#333"
            textContentType="emailAddress"
            style={styles.input}
          />
          <TextInput
            placeholder="12345678..."
            placeholderTextColor="#333"
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!click ? true : false}
            style={styles.input}
          />
          {!click ? (
            <Icon
              name="eye-off-outline"
              size={25}
              color="#555"
              style={styles.eye}
              onPress={() => setClick(!click)}
            />
          ) : (
            <Icon
              name="eye-outline"
              size={25}
              color="#555"
              style={styles.eye}
              onPress={() => setClick(!click)}
            />
          )}
        </View>
        <View
          style={{
            width: width * 1 - 50,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: width / 1.4,
              backgroundColor: '#435DFF',
              height: height / 8 - 45,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              marginTop: 20,
            }}
            onPress={handleSignup}
            >
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
      style={{
        flexDirection:"row",
        paddingHorizontal:20,
        justifyContent:"center"
      }}
      >
        <Text
        style={{
          color:"#333",
          fontSize:15,
          fontWeight:"600"
        }}
        >Already have an account?</Text>
        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        >
        <Text
         style={{
          color:"#435DFF",
          fontSize:15,
          fontWeight:"700"
        }}
        >{"  "}Login Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    width: width * 1 - 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  input: {
    width: width / 1.3,
    height: height / 8 - 45,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    borderColor: '#eee',
    color: '#333',
    fontSize: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  eye: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
});
