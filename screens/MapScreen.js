import * as React from 'react';
//  import Core Components
import { StyleSheet, View } from 'react-native';
// import modules components
import { Modal, Portal, Button, Provider } from 'react-native-paper';
// import custom components
import Map from '../components/Map';
import StationsList from '../components/StationsList';

export default function MapScreen() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, margin: 20};

    return (
      <View style={styles.container}>
          <Provider>
            <Map />
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <StationsList />
              </Modal>
            </Portal>
            <Button
              style={styles.button} 
              icon="bike" 
              mode="contained" 
              onPress={showModal}>
              VOIR LES STATIONS
            </Button>
          </Provider>
      </View>
    );
  }

// style the screen and its elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  button: {
    backgroundColor: '#ff4500',
    marginLeft: 100,
    marginRight: 100,
    marginTop: -70,
    padding: 5,
  },
});