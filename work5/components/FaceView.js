import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function FaceView() {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [zoom, setZoom] = useState(0.5);

  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>ไม่มีกล้อง</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleFace = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const handleZoom = (z) => {
    if (zoom >= 0 && z < 0) setZoom(zoom + z);
    else if (zoom <= 1 && z > 0) setZoom(zoom + z);
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={{ height: '100%', width: '100%' }}
        facing={facing}
        zoom={zoom}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleFace}>
            <Text style={styles.buttonText}>สลับกล้อง</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleZoom(-0.1)}>
            <Text style={styles.buttonText}>ย่อ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleZoom(0.1)}>
            <Text style={styles.buttonText}>ขยาย</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>F: {facing}</Text>
          <Text style={styles.text}>Z: {zoom.toFixed(1)}</Text>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
    height: 450,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center', 
    marginTop: 20, 
  },
  textContainer: {
    position: 'absolute', 
    bottom: 20, 
    left: 0,
    right: 0,
    alignItems: 'center', 
  },
  button: {
    backgroundColor: 'blue', 
    padding: 10,
    borderRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold', 
  },
  text: {
    color: 'white', 
    fontSize: 16,
    marginVertical: 5, 
  },
  message: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});