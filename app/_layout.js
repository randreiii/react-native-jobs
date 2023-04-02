import { Stack } from 'expo-router';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import DMBold from '../assets/fonts/DMSans-Bold.ttf';
import DMMedium from '../assets/fonts/DMSans-Medium.ttf';
import DMRegular from '../assets/fonts/DMSans-Regular.ttf';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold,
    DMMedium,
    DMRegular,
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
