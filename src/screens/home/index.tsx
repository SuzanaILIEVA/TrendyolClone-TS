import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '../../store/index';

import {SafeAreaView} from 'react-native-safe-area-context';
import CategoriesWidgets from '../../widgets/CategoriesWidgets';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import IntroductionWidgets from '../../widgets/IntroductionWidgets';
import BestSeller from '../../widgets/BestSeller';
import PopularProducts from '../../widgets/PopularProducts';
import JewelryWidgets from '../../widgets/JewelryWidgets';
import ElectronicsWidgets from '../../widgets/ElectronicsWidgets';
import BrandsWidgets from '../../widgets/BrandsWidgets';
import Button from '../../components/ui/Button';

const Home: React.FC = () => {
  // const {categories} = useSelector((state: RootState) => state.categoriesStr);
  // const dispatch = useDispatch<AppDispatch>();

  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CategoriesWidgets />

        <IntroductionWidgets />
        <BestSeller />
        <PopularProducts />
        <BrandsWidgets />
        <JewelryWidgets />
        <ElectronicsWidgets />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
