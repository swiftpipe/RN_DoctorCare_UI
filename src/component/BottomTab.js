import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const menus = ['home', 'search1', 'hearto', 'calendar', 'user'];

const BottomTab = ({selected, onSelected}) => {
  return (
    <View style={styles.bottoms}>
      {menus.map((e, i) => {
        return (
          <TouchableOpacity key={e} onPress={() => onSelected(i)}>
            <AntDesign
              color={selected == i ? '#9E70A9' : '#222'}
              name={e}
              size={32}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottoms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingBottom: 43,
  },
});
