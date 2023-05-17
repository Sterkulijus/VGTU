import { View, StyleSheet } from 'react-native';
import BottomBar from './BottomBar';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, Divider } from "@react-native-material/core";
import { useRoute } from '@react-navigation/native';
const ScheduleSelector = () => {

  const route = useRoute();
  //var grupee = route.params.myGroup;
  const navigation = useNavigation();

  const onWeekPress = async () => {
    navigation.navigate('ScheduleView');
  }
  const onDayPress = async () => {
    navigation.navigate('TodaysSchedule');
  }

  return (
    <View style={styles.main}>
      <View style={styles.main}>

        <View style={styles.header}>
          <View style={[styles.mapSelector]}>
            <Pressable onPress={onDayPress} style={[styles.pressableStyle, {marginRight: 15}]}>
              <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Todays</Text>
            </Pressable>

            <Pressable onPress={onWeekPress} style={styles.pressableStyle}>
              <Text style={{ fontWeight: '700', fontSize: 20, color: 'white' }}>Week</Text>
            </Pressable>
          </View>
        </View>
        <Divider style={{ marginTop: 5 }} />
      </View>
    </View>
  );
};

export default ScheduleSelector;


const styles = StyleSheet.create({
  main: {
    backgroundColor: '#dde2e7',
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
    alignItems: 'center',
    flexDirection: 'row'
  },
  pressableStyle: {
    backgroundColor: '#0b4dc7',
    borderRadius: 50,
    width: 100,
    alignItems: 'center'
  }
});
