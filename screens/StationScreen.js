//  import Core Components
import { StyleSheet, View } from 'react-native';
import StationDetail from '../components/StationDetail';

export default function StationScreen() {
    return (
      <View style={styles.container}>
        <StationDetail />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});