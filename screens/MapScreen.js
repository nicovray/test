import * as React from 'react';
//  import Core Components
import { StyleSheet, Text, View } from 'react-native';
// import modules components
import { Modal, Portal, Button, Provider } from 'react-native-paper';

// import custom components
import Map from '../components/Map';
import Stations from '../components/Stations';

export default function MapScreen() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

    return (
      <View style={styles.container}>
          <Provider>
            <Map />
            <Portal>
              <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Stations />
              </Modal>
            </Portal>
            <Button
              style={styles.button} 
              icon="bike" 
              mode="contained" 
              onPress={showModal}>
              Voir les stations
            </Button>
          </Provider>
      </View>
    );
  }

// style the screen and its elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'green',
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 5,
  },
});