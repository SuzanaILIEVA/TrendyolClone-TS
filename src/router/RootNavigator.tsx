import {StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import {AUTHNAVIGATOR, PRODUCTSNAVIGATOR, TABNAVIGATOR} from '../utils/routes';
import ProductList from '../screens/products';
import ProductDetail from '../screens/products/ProductDetail';
import {colors} from '../theme/colors';
import LoginScreen from '../screens/auth/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../store';
import {checkUser} from '../store/slice/authSlice';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();
  const getState = async () => {
    const token = await AsyncStorage.getItem('token');
    // console.log('TOKEN : ', token);
    if (token) {
      dispatch(checkUser(token));
    }
  };
  useEffect(() => {
    getState();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',

        headerTintColor: colors.BLACK,
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR.TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTSLIST}
        component={ProductList}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTSDETAIL}
        component={ProductDetail}
      />

      <Stack.Screen name={AUTHNAVIGATOR.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
