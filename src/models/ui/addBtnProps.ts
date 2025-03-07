import {TouchableOpacityProps} from 'react-native';

interface AddBtnProps extends TouchableOpacityProps {
  btnsize: 'small' | 'medium' | 'large';
  title: string;
}

export type {AddBtnProps};
