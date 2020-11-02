import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import MainNav from './navigation/MainNav';
import PracticesReducer from './store/reducers/PracticesReducer';

const rootReducer = combineReducers({
  practices: PracticesReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => {setFontLoaded(true)}} 
        onError={(err) => console.log(err)}
      />
    );
  }
  
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
    ); 
}