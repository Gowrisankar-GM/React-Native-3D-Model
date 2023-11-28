import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Canvas} from '@react-three/fiber/native';
import {Suspense} from 'react';
import useControls from 'r3f-native-orbitcontrols';
import {PerspectiveCamera} from '@react-three/drei';
import ThreeDScenes from './Src/Components/ThreeDScenes';

const RootFile = () => {
  const [Orbitcontrols, events] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContainer} {...events}>
        <Canvas style={styles.canvasStyle}>
          <Orbitcontrols enablePan={true} enableZoom={true} />
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <directionalLight position={[1, 0, 0]} args={['#918e8e', 5]} />
          <directionalLight position={[-1, 0, 0]} args={['#918e8e', 5]} />
          <directionalLight position={[0, 1, 0]} args={['#918e8e', 5]} />
          <directionalLight position={[0, -1, 0]} args={['#918e8e', 5]} />
          <directionalLight position={[0, 0, 1]} args={['#918e8e', 5]} />
          <directionalLight position={[0, 0, -1]} args={['#918e8e', 5]} />
          <Suspense fallback={null}>
            <ThreeDScenes />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottomContainer} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 2,
    backgroundColor: '#545755',
  },
  canvasStyle: {
    borderRadius: 10,
    width: 350,
    height: 300,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default RootFile;
