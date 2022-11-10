import { StatusBar } from 'expo-status-bar';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import { store } from './src/store';
import { Provider } from 'react-redux'


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>

        <Navigation colorScheme={colorScheme} />
        <StatusBar />

      </Provider>
    );
  }
}
