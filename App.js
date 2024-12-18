import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import SwipeableCard from './components/SwipeableCard';

const sampleTexts = [
  "Swipe right if you agree!",
  "This is a great idea.",
  "React Native is awesome!",
  "Keep swiping to see more.",
  "Last card in the deck.",
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = useCallback(() => {
    if (currentIndex < sampleTexts.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex]);

  const handleSwipeRight = useCallback(() => {
    if (currentIndex < sampleTexts.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {currentIndex < sampleTexts.length && (
          <SwipeableCard
            text={sampleTexts[currentIndex]}
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          />
        )}
        <StatusBar style="auto" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
