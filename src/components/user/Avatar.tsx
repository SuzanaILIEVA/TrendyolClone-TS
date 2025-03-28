import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AvatarProps} from '../../models/ui/avatarProps';
import {colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {getInitials} from '../../utils/functions';

const Avatar = ({name, surname, image, size}: AvatarProps) => {
  return (
    <View style={[styles.container, {width: size, height: size}]}>
      <Text style={styles.firstLetters}>{getInitials(name, surname)}</Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    // width: width * 0.4,
    // height: width * 0.4,
    borderRadius: 100,
  },
  firstLetters: {
    fontSize: 23,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
});
