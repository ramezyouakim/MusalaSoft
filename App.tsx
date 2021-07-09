import React from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './src/screens/ErrorBoundary/ErrorBoundary';
import AppNavigator from './src/routes/mainRouter';
import store from './src/store';
import { setInitAppLang } from './src/actions/main';

console.disableYellowBox = true;
setInitAppLang()

const App = () => {

  return (
    <ErrorBoundary>

      <Provider store={store}>

        <AppNavigator />

      </Provider>

    </ErrorBoundary>

  )
}

export default App;