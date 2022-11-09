import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import { useGetNewReleasesQuery } from '../api/spotifyApi';
import { useSpotifyAuth } from '../auth/hooks/useSpotifyAuth';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  // const { data, status } = useGetNewReleasesQuery();
  // console.log(data)
  // console.log(status)
  const { promptAsync } = useSpotifyAuth()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TouchableOpacity onPress={() => promptAsync()}><Text> Login xd</Text></TouchableOpacity>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
