import React from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import {CardHome} from './HomeScreen';
const Header = () => {
  return (
    <View style={styles.header}>
      <Entypo name="chevron-left" size={32} color="#fff" />
      <View style={styles.headerBody}>
        <Text style={styles.headerText}>Search</Text>
        <View style={styles.headerRightContainer}>
          <Entypo name="map" size={25} color="#fff" />
          <Octicons
            name="settings"
            size={25}
            color="#fff"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.groupInputs}>
        <View style={styles.wrapperInput}>
          <AntDesign name="search1" size={18} color="gray" />
          <TextInput style={styles.inputText} value="Ho Chi Minh" />
        </View>
        <View style={styles.wrapperInput}>
          <Feather name="map-pin" size={18} color="gray" />
          <TextInput
            style={[styles.inputText, {color: '#9770A3'}]}
            value="Current Location"
          />
          <Text>12 ml</Text>
        </View>
      </View>
    </View>
  );
};

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.mapview}
        initialRegion={{
          latitude: 10.762622,
          longitude: 106.660172,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 10.762622,
            longitude: 106.660172,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <View
            style={{
              backgroundColor: '#EDE6EA',
              padding: 5,
              borderRadius: 40,
            }}>
            <View
              style={{
                backgroundColor: '#C49DBD',
                padding: 5,
                borderRadius: 20,

                shadowColor: '#714B87',
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 20,
              }}>
              <LinearGradient
                style={styles.marker}
                colors={['#714B87', '#944787', '#984587']}>
                <FontAwesome5 name="user-alt" color="#fff" />
              </LinearGradient>
            </View>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const ListCard = () => {
  return (
    <View>
      <CardHome
        title="Your Next Appointment"
        noHeader
        noFooter
        book
        info={{
          name: 'Dr T Pay Dhar',
          time: 'Sunday, May 15th at 8:00 PM',
          address: '570 Kemmer Shores',
          detail: 'San Francisco, CA 90293',
          islike: true,
          rating: 4,
          tag: 'Wellness',
        }}
      />
      <CardHome
        title="Specialist in your area"
        noHeader
        noFooter
        book
        info={{
          name: 'Dr Ayon Das',
          time: 'Popular Pharma Limited',
          address: 'Dermatologists',
          detail: 'San Francisco, CA | 5 min',
          islike: true,
          rating: 4,
          tag: 'Wellness',
        }}
      />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Map />
      <ListCard />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    padding: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {marginLeft: 12, transform: [{rotate: '-90deg'}]},
  headerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    // padding: 15,
  },
  wrapperInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  inputText: {
    padding: 10,
    flex: 1,
  },
  mapview: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  marker: {
    backgroundColor: '#6C4C86',
    padding: 10,

    borderRadius: 20,
  },
});
