import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
      <View style={{alignItems: 'center' }}>
        <Text style={styles.title}>Allo ?</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
    }
});