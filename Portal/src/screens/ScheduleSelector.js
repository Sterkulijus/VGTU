import { View, StyleSheet} from 'react-native';
import BottomBar from '../components/BottomBar';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, Divider, Button } from "@react-native-material/core";
import { useRoute } from '@react-navigation/native';
const ScheduleSelector = () => {
  const route = useRoute();
  var grupee = route.params.myGroup;
  const navigation = useNavigation();
  const onWeekPress = async () => { 
    navigation.navigate({name:'ScheduleWeek',params: { myGroup: grupee }, merge: true});
  }
  const onDayPress = async () => { 
    navigation.navigate({name:'ScheduleDay',params: { myGroup: grupee }, merge: true});
  }

  return (
    <View style={styles.main}>
      <View style={styles.main}>

        <View style={styles.header}>
          <View style={[styles.mapSelector, {marginRight:5}]}>
            <Pressable >
            <Button title="Šios Dienos paskaitos" style={styles.button} onPress={onDayPress} />
            </Pressable>
          </View>
          <View style={styles.mapSelector}>
            <Button title="Šios savaitės paskaitos" style={styles.button} onPress={onWeekPress} />
          </View>
        </View>
        <Divider style={{ marginTop: 5}} />
        <View>
        </View>
      </View>
      <BottomBar />
    </View>
  );
};

export default ScheduleSelector;


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
  button: {
    width: '90%',
    backgroundColor: '#0b4dc7',
    marginTop: 10,
  },
  mapSelector: {
    backgroundColor: '#0b4dc7',
    borderRadius: 40,
    width: '50%',
    alignItems: 'center'
  },

});
