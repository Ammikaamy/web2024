import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import FaceView from './components/FaceView';
import { Card } from 'react-native-paper';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    chakapetch: require('./assets/ChakraPetch-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // หรือแสดง loading indicator
  }
  
  var bg = require("./assets/photo.jpg");
  return (
    <ImageBackground source={bg} resizeMode="cover" style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.paragraph}>Work 5: Camera App</Text>
        <Card>
          <FaceView />
        </Card>
        <Text style={styles.paragraph}>653380356-3 นางสาวเอมมิกา โยหา</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'transparent', // เปลี่ยนเป็น transparent
    padding: 8,
  },
  paragraph: {
    fontSize: 35,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: 'chakapetch',
    color: 'white', // 
  },
});