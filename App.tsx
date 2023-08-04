/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useStore } from './store/zustand';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const count = useStore(state => state.count);
  const incrCount = useStore(state => state.increaseCount);
  const decrCount = useStore(state => state.decreaseCount);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          <View style={{ margin: 16, }}>
            <View style={{ margin: 16, alignItems: 'center' }}>
              <Text>{count}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Pressable 
                onPress={decrCount}
                style={{ 
                  margin: 16,
                  padding: 8,
                  backgroundColor: 'cyan',
                  borderRadius: 8,
                }}
                >
                <Text>Decr</Text>
              </Pressable>
              <Pressable 
                onPress={incrCount}
                style={{ 
                  margin: 16,
                  padding: 8,
                  backgroundColor: 'cyan',
                  borderRadius: 8,
                }}
                >
                <Text>Incr</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
