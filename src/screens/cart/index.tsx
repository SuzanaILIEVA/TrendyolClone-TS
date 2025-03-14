import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import CartItem from '../../components/cart/CartItem';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/Button';
import {colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import EmptyCart from '../../components/cart/EmptyCart';
import {AUTHNAVIGATOR, TABNAVIGATOR} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Cart = (props: Props) => {
  const {cart, totalPrice} = useSelector((state: RootState) => state.cartStr);
  // console.log('sepetteki urunler ==>', cart);
  const {isLogin} = useSelector((state: RootState) => state.authStr);

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<any>();

  const checkLogin = () => {
    if (!isLogin) {
      Alert.alert('Login', 'Please login  to comfirm your cart', [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            console.log('cancel pressed');
          },
        },
        {
          text: 'Login',
          onPress: () => {
            navigation.navigate(AUTHNAVIGATOR.LOGIN);
          },
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <View style={styles.container}>
        <FlatList
          ListEmptyComponent={
            <View style={styles.emptyCart}>
              <EmptyCart />
              <Text style={styles.emptycartInfo}>
                Your shopping cart is empty.
              </Text>
              <Button
                btnsize="large"
                title={'CONTINUE SHOPPING'}
                onPress={() => navigation.navigate(TABNAVIGATOR.HOME)}
              />
            </View>
          }
          data={cart}
          renderItem={({item}) => <CartItem cartProduct={item} />}
          // keyExtractor={item => item.id.toString()}
        />
      </View>
      {cart.length == 0 ? null : (
        <View style={styles.priceContainer}>
          <View style={styles.left}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.price}>{totalPrice.toFixed(2)} € </Text>

            <Text style={styles.info}>Free Shipping </Text>
          </View>
          <View style={styles.right}>
            <Button btnsize="large" title={'CHECKOUT'} onPress={checkLogin} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  priceContainer: {
    height: height * 0.09,
    borderTopWidth: 0.5,
    borderColor: colors.DARK_GRAY,
    flexDirection: 'row',
  },
  right: {
    flex: 2,
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    color: colors.GREEN,
    fontWeight: 'bold',
  },
  price: {
    color: colors.PRIMARY,
    fontSize: 23,
    fontWeight: 'bold',
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.1,
    marginBottom: height * 0.1,
    padding: 20,
    backgroundColor: colors.WHITE,
  },
  emptycartInfo: {
    fontSize: 20,
    color: colors.GRAY,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});
