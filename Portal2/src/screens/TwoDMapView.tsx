// npm i react-native-unimodules
// expo install expo-components
// npm install react-native-maps-directions
//npm install react-native-google-places-autocomplete
//npm install react-input-latlng --save
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import {
  Geometry,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  Point,
} from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { useRef, useState, useEffect  } from "react";
import MapViewDirections from "react-native-maps-directions";
import React from "react";
import BottomBar from '../components/BottomBar';
import MapViewHeader from '../components/MapViewHeader';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 54.722578,
  longitude: 25.337858,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

type InputAutocompleteProps = {
  label: string;
  placeholder?: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutocompleteProps) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: 'AIzaSyC2xd1W-Gox6pHPDNEjixjnON70zTy9dNY',
          language: "en",
        }}
      />
    </>
  );
}

export default function App() {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef<MapView>(null);

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args: any) => {
    if (args) {

      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  
  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      console.log(destination);
      
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const onPlaceSelected = (
    details: GooglePlaceDetail | null,
    flag: "origin" | "destination"
  ) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  useEffect(() => {
    let point: Point ={
      lat: 54.722578,
      lng: 25.337858
    }
  
    let tep: Geometry = {
      location: point,
      viewport: {
        northeast: undefined,
        southwest: undefined
      }
    }
  
    let kazkas: GooglePlaceDetail= {
      address_components: [],
      adr_address: "",
      formatted_address: "",
      geometry: tep,
      icon: "",
      id: "",
      name: "",
      place_id: "",
      plus_code: undefined,
      reference: "",
      scope: "GOOGLE",
      types: [],
      url: "",
      utc_offset: 0,
      vicinity: ""
    }
  
    onPlaceSelected(kazkas, 'destination');
  }, []); 

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
      <MapViewHeader />
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={INITIAL_POSITION}
        >
          {origin && <Marker coordinate={origin} />}
          {destination && <Marker coordinate={destination} />}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey='AIzaSyC2xd1W-Gox6pHPDNEjixjnON70zTy9dNY'
              strokeColor="#6644ff"
              strokeWidth={4}
              onReady={traceRouteOnReady}
            />
          )}
        </MapView>
        <View style={styles.searchContainer}>
          <InputAutocomplete
            label="Origin"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "origin");
            }}
          />
          {/* <InputAutocomplete
            label="Destination"
            onPlaceSelected={(details) => {
              onPlaceSelected(details, "destination");
            }}
          /> */}
          <TouchableOpacity style={styles.button} onPress={traceRoute}>
            <Text style={styles.buttonText}>Trace route</Text>
          </TouchableOpacity>
          {distance && duration ? (
            <View>
              <Text>Distance: {distance.toFixed(2)}</Text>
              <Text>Duration: {Math.ceil(duration)} min</Text>
            </View>
          ) : null}

        </View> 
      </SafeAreaView>
      <BottomBar></BottomBar>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 50,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 5,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#bbb",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
  },
});