import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors} from '../../theme/colors';
import {ProductItemProps} from '../../models/ui/productItemProps';

const FavoritesButton = ({product}: ProductItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name={product?.isFavorite ? 'heart' : 'heart-outline'}
        color={colors.BLACK}
        size={25}
      />
    </TouchableOpacity>
  );
};

export default FavoritesButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 4,
    right: 8,
    margin: 5,
    zIndex: 99,
    borderWidth: 0.5,
    borderColor: colors.LIGHT_GRAY,
    padding: 5,
    borderRadius: 50,
    elevation: 6,
    backgroundColor: colors.WHITE,
  },
});
