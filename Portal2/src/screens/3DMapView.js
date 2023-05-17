import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import BottomBar from '../components/BottomBar';
import MapViewHeader from '../components/MapViewHeader';
import { Canvas, useFrame, useLoader } from '@react-three/fiber/native';
import { useRef, Suspense } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { Pressable } from "@react-native-material/core";
import UpArrow from '../../assets/icons/nextUp.png'
import DownArrow from '../../assets/icons/nextDown.png'
import LeftArrow from '../../assets/icons/nextLeft.png'
import RightArrow from '../../assets/icons/nextRight.png'
// import { TextureLoader } from 'expo-three';



export default function ThreeDMapView() {
    var XCoordinate = 0
    var YCoordinate = 0
    var timer = null

    const addXPlus = () => {
        XCoordinate = XCoordinate + 0.05
        timer = setTimeout(addXPlus, 20);
    }

    const addXMinus = () => {
        XCoordinate = XCoordinate - 0.05
        timer = setTimeout(addXMinus, 20);
    }

    const addYPlus = () => {
        YCoordinate = YCoordinate + 0.05
        timer = setTimeout(addYPlus, 20);
    }

    const addYMinus = () => {
        YCoordinate = YCoordinate - 0.05
        timer = setTimeout(addYMinus, 20);
    }

    const stopTimer = () => {
        clearTimeout(timer);
    }


    function CollegeMap(props) {
        // const [base, normal, rough] = useLoader(TextureLoader, [
        //   require('./assets/Airmax/textures/BaseColor.jpg'),
        //   require('./assets/Airmax/textures/Normal.jpg'),
        //   require('./assets/Airmax/textures/Roughness.png'),
        // ]);

        const material = useLoader(MTLLoader, require('../../assets/untitled.mtl'));

        const obj = useLoader(
            OBJLoader,
            require('../../assets/untitled.obj'),
            (loader) => {
                material.preload();
                loader.setMaterials(material);
            }
        );

        const mesh = useRef();

        // useLayoutEffect(() => {
        //   obj.traverse((child) => {
        //     // if (child instanceof THREE.Mesh) {
        //     //   child.material.map = base;
        //     //   child.material.normalMap = normal;
        //     //   child.material.roughnessMap = rough;
        //     // }
        //   });
        // }, [obj]);

        useFrame((state, delta) => {
            mesh.current.rotation.x = XCoordinate;
            mesh.current.rotation.y = YCoordinate;
        });

        return (
            <mesh ref={mesh} >
                <primitive object={obj} />
            </mesh>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <MapViewHeader />
            <SafeAreaView style={styles.main}>
                <Pressable style={styles.pressableStyle} onPressIn={addXPlus} onPressOut={stopTimer}>
                    <Image source={UpArrow} style={[styles.logo,]} resizeMode="contain" />
                </Pressable>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Pressable style={[styles.pressableStyle, { width: '10%', height: 'auto' }]} onPressIn={addYPlus} onPressOut={stopTimer}>
                        <Image source={LeftArrow} style={[styles.logo,]} resizeMode="contain" />
                    </Pressable>
                    <Canvas style={styles.objectContainer} resizeMode="contain" >
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Suspense fallback={null}>
                            <CollegeMap style={styles.object} />
                        </Suspense>
                    </Canvas>
                    <Pressable style={[styles.pressableStyle, { width: '10%', height: 'auto' }]} onPressIn={addYMinus} onPressOut={stopTimer}>
                        <Image source={RightArrow} style={[styles.logo,]} resizeMode="contain" />
                    </Pressable>
                </View>
                <Pressable style={styles.pressableStyle} onPressIn={addXMinus} onPressOut={stopTimer}>
                    <Image source={DownArrow} style={[styles.logo,]} resizeMode="contain" />
                </Pressable>
            </SafeAreaView>
            <BottomBar></BottomBar>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: 'red',
    },
    objectContainer: {
        width: 700,
    },
    object: {


    },
    logo: {
        height: 28,
    },
    pressableStyle: {
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});