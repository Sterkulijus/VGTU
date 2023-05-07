import React, { useState, useRef, Suspense } from 'react'
import { View, StyleSheet, StatusBar, Alert, Image } from 'react-native';
import BottomBar from '../components/BottomBar';
import { Pressable, Text, Divider  } from "@react-native-material/core";
// import UpArrow from '../../assets/icons/nextUp.png'
// import DownArrow from '../../assets/icons/nextDown.png'
// import LeftArrow from '../../assets/icons/nextLeft.png'
// import RightArrow from '../../assets/icons/nextRight.png'
// import { Canvas, useFrame } from '@react-three/fiber/native'
// import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei/native'
import { Canvas } from '@react-three/fiber/native'
//import modelPath from './../assets/models/model.glb'

// function Model(props) {
//   const mesh = useRef(null)
//  // const { scene } = useGLTF('../../assets/models/model.glb')
//   return <mesh
//   onClick={(e) => console.log('onPress')}
//   onPointerDown={(e) => console.log('onPressIn')}
//   onPointerUp={(e) => console.log('onPressOut')}
//   onDoubleClick={(e) => console.log('onLongPress')}
//   onPointerOver={(e) => console.log('onHoverIn')}
//   onPointerOut={(e) => console.log('onHoverOut')}
//   onPointerMove={(e) => console.log('onPressMove')}
//   // Not implemented
//   // onContextMenu={(e) => console.log('context menu')}
//   // onWheel={(e) => console.log('wheel spins')}
// />
// }

const MapView = () => {
  return (
    <View style={styles.main}>
      <View style={styles.main}>

        <View style={styles.header}>
          <View style={[styles.mapSelector, {marginRight:5}]}>
            <Pressable >
              <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>2D MAP</Text>
            </Pressable>
          </View>
          <View style={styles.mapSelector}>
            <Pressable >
              <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>3D MAP</Text>
            </Pressable>
          </View>
        </View>
        <Divider style={{ marginTop: 5}} />

        <View>
          {}
          <Text>aaaaaaaaaaaaaaaaa</Text>
        </View>
      </View>
      <BottomBar />
    </View>
  );
};


// function MapRender(props) {

//   const mesh = useRef(null)
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)

//   useFrame((state, delta) => {
//     mesh.current.rotation.x = XCoordinate
//     mesh.current.rotation.y = YCoordinate
//   })
//   //const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bowl-broth/model.gltf')
//   // return <primitive object={scene} {...props} />
//   return (
//     // <primitive object={kazkas} {...props} />
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={1}
//       //onClick={(event) => setActive(!active)}
//       // onPointerOver={(event) => setHover(true)}
//       // onPointerOut={(event) => setHover(false)}
//       >
//       <boxGeometry args={[2, 2]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }


// var XCoordinate = 0
// var YCoordinate = 0
// var timer = null

// const addXPlus = () => {
//   XCoordinate = XCoordinate + 0.05
//   timer = setTimeout(addXPlus, 20);
// }

// const addXMinus = () => {
//   XCoordinate = XCoordinate - 0.05
//   timer = setTimeout(addXMinus, 20);
// }

// const addYPlus = () => {
//   YCoordinate = YCoordinate + 0.05
//   timer = setTimeout(addYPlus, 20);
// }

// const addYMinus = () => {
//   YCoordinate = YCoordinate - 0.05
//   timer = setTimeout(addYMinus, 20);
// }



// const stopTimer = () => {
//   clearTimeout(timer);
// }

// const MapView = () => {
//   return (
//     <Text>
//       asdasdasd
//     </Text>
//     // <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
//     //   <View style={styles.main}>
//     //     <Pressable style={styles.pressableStyle} onPressIn={addXPlus} onPressOut={stopTimer} >
//     //       <Image source={UpArrow} style={[styles.logo,]} resizeMode="contain" />
//     //     </Pressable>

//     //     <View style={{ height: '86%', display: 'flex', flexDirection: 'row' }}>
//     //       <Pressable style={[styles.pressableStyle, { width: '10%', height: 'auto'}]} onPressIn={addYPlus} onPressOut={stopTimer} >
//     //         <Image source={LeftArrow} style={[styles.logo,]} resizeMode="contain" />
//     //       </Pressable>
//     //       <Canvas >
//     //         <ambientLight />
//     //         <pointLight position={[10, 10, 10]} />
//     //         <MapRender position={[0, 0, 0]} />
//     //         {/* <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI /4 ]}> */}
//     //           {/* <Stage> */}
//     //             {/* <MapRender position={[0, 0, 0]} /> */}
//     //           {/* </Stage> */}
//     //         {/* </PresentationControls> */}
//     //       </Canvas>
//     //       <Pressable style={[styles.pressableStyle, { width: '10%', height: 'auto' }]} onPressIn={addYMinus} onPressOut={stopTimer} >
//     //         <Image source={RightArrow} style={[styles.logo,]} resizeMode="contain" />
//     //       </Pressable>
//     //     </View>
//     //     <Pressable style={styles.pressableStyle} onPressIn={addXMinus} onPressOut={stopTimer} >
//     //       <Image source={DownArrow} style={[styles.logo,]} resizeMode="contain" />
//     //     </Pressable>
//     //   </View>
//     //   <BottomBar></BottomBar>
//     // </View>
//   );
// };

export default MapView;


const styles = StyleSheet.create({
  main: {
    backgroundColor: '#dde2e7',
    flex: 1,
  },
  button: {
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  mapSelector: {
    backgroundColor: '#0b4dc7',
    borderRadius: 40,
    width: '30%',
    alignItems: 'center'
  },



  // pressableStyle: {
  //   height: '7%',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },
  // logo: {
  //   height: 28,
  // },
});
