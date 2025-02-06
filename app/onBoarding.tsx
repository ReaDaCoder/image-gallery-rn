import { StyleSheet, Image, Button,Alert } from 'react-native';
import {SymbolView} from 'expo-symbols';
import {} from 'expo-media-library';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function onBoardingScreen() {
  
  return (
    <View style={styles.container}>
       <Text style={styles.title}>Gallery</Text>
      <Image 
      style={styles.tinyLogo}
      source={require("@/assets/images/gallery-app-img.jpg")} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.permission}>This app requires permission for the following:</Text>
      <Text style={styles.perm}>Camera Permissions:</Text>
      <Text>For taking pictures</Text>
      <Text>Allow Location</Text>
      <Button
            title="Allow"
            onPress={() => Alert.alert('Left button pressed')}
            color="#E8505C"
          />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom:50,
    color:'#E8505C',
    shadowColor: '#171717',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  tinyLogo: {
    width: 500,
    height: 300,
  },
  permission: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#E8505C',
    marginBottom:13,
  },
  perm: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'black',
    marginBottom:9,
  },
});
