import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {colors} from '../../theme/colors';
import {width} from '../../utils/constants';

const BestSellerBadges = () => {
  return (
    <View style={styles.container}>
      <FontAwesome6
        name="medal"
        iconStyle="solid"
        size={18}
        color={colors.YELLOW}
      />
      <Text style={styles.text}>Best Seller</Text>
    </View>
  );
};

export default BestSellerBadges;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.14,
    backgroundColor: colors.BLUE,
    marginVertical: 10,
    marginRight: 10,
    elevation: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.DARK_BLUE,
    marginTop: 5,
    textAlign: 'center',
  },
});
