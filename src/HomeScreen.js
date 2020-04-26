import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Face = ({icon, title, color, full}) => {
  return (
    <View style={styles.faceGroup}>
      {full ? (
        <View style={{backgroundColor: color, borderRadius: 40}}>
          <Icon name={icon} size={36} color={'#fff'} />
        </View>
      ) : (
        <Icon name={icon} size={36} color={color} />
      )}

      <Text style={[styles.faceText, {color}]}>{title}</Text>
    </View>
  );
};

const Rating = ({rating}) => {
  return (
    <View style={styles.rating}>
      {Array(5)
        .fill(0)
        .map((_, i) => {
          if (rating > i) {
            return (
              <AntDesign name="star" color="#FA8D00" style={{marginRight: 5}} />
            );
          }
          return <AntDesign name="staro" style={{marginRight: 5}} />;
        })}
    </View>
  );
};

const CardHome = ({title, info}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeaderContaner}>
        <Text style={styles.cardHeading}>{title}</Text>
        <Text style={styles.cardMore}>See All</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardBodyTop}>
          <Image
            style={styles.cardAvatar}
            source={{
              uri:
                'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
            }}
          />
          <View style={styles.cardLeftSide}>
            <Text style={styles.tag}>{info.tag}</Text>
            <Text style={styles.cardName}>{info.name}</Text>
            <Text style={styles.cardTime}>{info.time}</Text>
            <Text style={styles.cardAddress}>{info.address}</Text>
            <Text style={styles.cardAddress}>{info.detail}</Text>
            {info.rating && <Rating rating={info.rating} />}
            <View style={styles.iconMore}>
              <Icon name="angle-right" color="gray" />
            </View>
            {info.islike && (
              <View style={styles.iconLike}>
                <Icon name="heart" color="#E8008D" size={22} />
              </View>
            )}
          </View>
        </View>
        <View style={styles.margin} />
        <View style={styles.cardBodyBottom}>
          <View style={styles.cardGroupIcon}>
            <AntDesign name="checkcircleo" size={32} />
            <Text style={styles.cardBottomTitle}>Check-in</Text>
          </View>
          <View style={styles.cardGroupIcon}>
            <AntDesign name="closecircleo" size={32} />
            <Text style={styles.cardBottomTitle}>Cancle</Text>
          </View>
          <View style={styles.cardGroupIcon}>
            <AntDesign name="calendar" size={32} />
            <Text style={styles.cardBottomTitle}>Calendar</Text>
          </View>
          <View style={styles.cardGroupIcon}>
            <MaterialIcons name="explore" size={32} />
            <Text style={styles.cardBottomTitle}>Directions</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hi Carly</Text>
        <Text style={styles.desc}>How are you feeling today ?</Text>
      </View>
      <View style={styles.faceContainer}>
        <Face icon="laughing" title="Greet" color="#E23f9c" />
        <Face icon="slightly-smile" title="Good" color="#C55696" />
        <Face icon="neutral" title="Okey" color="#A5008C" full />
        <Face icon="frowning" title="Bad" color="#827791" />
        <Face icon="expressionless" title="Awful" />
      </View>
      <View>
        <CardHome
          title="Your Next Appointment"
          info={{
            name: 'Dr T Pay Dhar',
            time: 'Sunday, May 15th at 8:00 PM',
            address: '570 Kemmer Shores',
            detail: 'San Francisco, CA 90293',
          }}
        />
        <CardHome
          title="Specialist in your area"
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tag: {
    color: '#B066A4',
  },
  cardContainer: {
    padding: 15,
  },
  margin: {
    height: 1,
    backgroundColor: '#F0F1F2',
    width: '100%',
    marginVertical: 10,
  },
  cardBodyBottom: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBottomTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  cardGroupIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconMore: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  iconLike: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardBodyTop: {
    flexDirection: 'row',
  },
  cardLeftSide: {
    paddingHorizontal: 10,
    flex: 1,
  },
  cardName: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardTime: {
    color: '#222',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAddress: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
  },
  cardAvatar: {
    height: 60,
    width: 60,
    backgroundColor: 'gray',
    borderRadius: 60,
  },
  cardHeaderContaner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardMore: {
    fontWeight: 'bold',
    color: '#7B6C95',
  },
  faceGroup: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceContainer: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceText: {
    fontSize: 16,
    marginTop: 6,
  },

  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    paddingHorizontal: 30,
    marginTop: 52,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  desc: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    marginTop: 5,
  },
});
