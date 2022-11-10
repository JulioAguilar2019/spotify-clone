import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { store } from './src/store';
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';
import { Spotifytheme } from './src/theme/Spotifytheme';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <PaperProvider theme={Spotifytheme}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PaperProvider>
        </SafeAreaProvider>
      </Provider>
    );
  }
}
