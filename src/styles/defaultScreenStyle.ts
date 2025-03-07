import {StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import {width} from '../utils/constants';

const defaultScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingBottom: 20,
    paddingHorizontal: 5,
  },
});

export {defaultScreenStyle};
