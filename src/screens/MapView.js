import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, Animated, requireNativeComponent } from 'react-native';
import BottomBar from '../components/BottomBar'
import ModelView from 'react-native-gl-model-view';

const AnimatedModelView = Animated.createAnimatedComponent(ModelView);




// import ModelView from 'react-native-gl-model-view';
// import ModelView from 'react-native-gl-model-view';
// // import ModelView from 'react-native-3d-model-view'
// //import MapModel from '../../assets/maps/cottage.obj'
// import Expo from "expo";
// import {
//     Scene,
//     Mesh,
//     MeshBasicMaterial,
//     PerspectiveCamera,
//     BoxBufferGeometry,
// } from "three";
// import ExpoTHREE, { Renderer } from "expo-three";
// import { ExpoWebGLRenderingContext, GLView } from "expo-gl";

export default class Multiple extends Component {

    
    constructor() {
      super();
      this.state = {
        rotateZ: new Animated.Value(0),
      };
    }
  
    componentDidMount() {
      this.animate(0);
    }
  
    animate(iteration) {
      Animated.timing(this.state.rotateZ, {
        toValue: ++iteration * 360,
        useNativeDriver: true,
        duration: 5000,
      }).start(this.animate.bind(this, iteration++));
    }
  
    renderModel() {
      return (
        <AnimatedModelView
          model={{
            uri: 'demon.model',
          }}
          texture={{
            uri: 'demon.png',
          }}
          tint={{r: 1.0, g: 1.0, b: 1.0, a: 1.0}}
          animate
          scale={0.01}
          translateZ={-2.5}
          rotateX={270}
          rotateZ={Animated.add(this.state.rotateZ, Math.random() * 360)}
          style={styles.model}
        />
      );
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            {this.renderModel()}
            {this.renderModel()}
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    model: {
      flex: 1,
      backgroundColor: 'transparent',
    },
  });

// const MapView = () => {

//     // // const [week, DienynasClick] = useState(true);
//     // var week = 5

//     // const onContextCreate = async (gl) => {
//     //     // three.js implementation.
//     //     const scene = new Scene();
//     //     const camera = new PerspectiveCamera(
//     //       75,
//     //       gl.drawingBufferWidth / gl.drawingBufferHeight,
//     //       0.1,
//     //       1000
//     //     );
//     //     gl.canvas = {
//     //       width: gl.drawingBufferWidth,
//     //       height: gl.drawingBufferHeight,
//     //     };

//     //     // set camera position away from cube
//     //     camera.position.z = 2;

//     //     const renderer = new Renderer({ gl });
//     //     // set size of buffer to be equal to drawing buffer width
//     //     renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

//     //     // create cube
//     //     // define geometry
//     //     const geometry = new BoxBufferGeometry(1, 1, 1);
//     //     const material = new MeshBasicMaterial({
//     //       color: "cyan",
//     //     });

//     //     const cube = new Mesh(geometry, material);

//     //     // add cube to scene
//     //     scene.add(cube);

//     //     // create render function
//     //     const render = () => {
//     //       requestAnimationFrame(render);
//     //       // create rotate functionality
//     //       // rotate around x axis
//     //       cube.rotation.x += 0.01;

//     //       // rotate around y axis
//     //       cube.rotation.y += 0.01;

//     //       renderer.render(scene, camera);
//     //       gl.endFrameEXP();
//     //     };

//     //     // call render
//     //     render();
//     //   };


//     return (
//         <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
//             <View style={styles.main}>
//                 {/* <ModelView
//                     model={{
//                         uri: 'cottage.obj',
//                     }}
//                     texture={{
//                         uri: 'font.png',
//                     }}

//                     scale={0.01}

//                     translateZ={-2}
//                     rotateZ={270}

//                     style={{ flex: 1 }}
//                 /> */}
//                 {/* <View>
//                     <GLView
//                         onContextCreate={onContextCreate}
//                         // set height and width of GLView
//                         style={{ width: 400, height: 400 }}
//                     />
//                 </View> */}

//                 {/* <ModelView
//                     model=
//                     {{
//                         uri: '../../assets/maps/cottage.obj',
//                     }}

//                     scale={0.01}

//                     translateZ={-2}
//                     rotateZ={270}

//                     style={{ flex: 1 }}
//                 /> */}
//                 {/* <ModelView
//                     source={{ zip: MapModel }}
//                     // onLoadModelStart={this.onLoadModelStart}
//                     // onLoadModelSuccess={this.onLoadModelSuccess}
//                     // onLoadModelError={this.onLoadModelError}
//                      /> */}

//             </View>

//             <BottomBar></BottomBar>
//         </View>
//     );
// };
// export default MapView;


// const styles = StyleSheet.create({
//     main: {
//         marginTop: StatusBar.currentHeight,
//         // backgroundColor: '#dde2e7',
//         flex: 1,
//         // alignItems: 'center'
//     },
//     weekStyle: {
//         alignSelf: 'center',
//     },
//     weekContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 10,
//         borderStyle: 'solid',
//         borderWidth: 1,
//         borderRadius: 25,
//         width: 150,
//     },
//     calendarContainer: {
//         marginTop: 10,
//         width: '100%',
//         // marginLeft: 15,
//         // marginRight: 15,

//     },
//     calendarElement: {
//         borderWidth: 1,
//         marginBottom: 10,
//         marginLeft: 15,
//         marginRight: 15
//     }

// });
