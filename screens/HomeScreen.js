//  import Core Components
import { Image, Text, View, StyleSheet, TextInput, ScrollView } from "react-native"
import { Button } from "react-native-paper";

export default function HomeScreen() {
    return (
      <ScrollView>
      <View style={styles.container}>

        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />

        <View style={styles.loginBox}>
          <Text style={styles.loginText}>Identifiant :</Text>
          <TextInput
            style={styles.input}
            placeholder="votre email"
          />

          <Text style={styles.loginText}>Mot de passe :</Text>
          <TextInput
            style={styles.input}
            placeholder="votre mot de passe"
          />
        
          <Button style={styles.button}>
              <Text style={styles.buttonText}>ME CONNECTER</Text>
          </Button>
        </View>

        <View style={styles.registerBox}>
          <Text style={styles.registerText}>Nouveau rider ?</Text>
          <Button style={styles.button}>
            <Text style={styles.buttonText}>CREER MON COMPTE</Text>
          </Button>
        </View>
        
        <View style={styles.contactBox}>
        <Text style={styles.contactText}>
            Vous souhaitez avoir plus d'informations sur l'application ?
            Vous rencontrez des problèmes pour vous connecter/vous enregistrer ?
            Vous voulez nous faire remonter un bug ?
            N'hésitez pas à nous contacter :
        </Text>
        <Button style={styles.button}>
            <Text style={styles.buttonText}>NOUS CONTACTER</Text>
          </Button>
        </View>        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    },
  logo: {
    width: '100%',
    resizeMode: 'contain',
    marginTop: -60, 
  },
  loginBox: {
    backgroundColor: "#ffefd5",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  registerBox: {
    backgroundColor: "#ffefd5",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
  },
  registerText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactBox: {
    backgroundColor: "#ffefd5",
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  contactText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 250,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#ff4500",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff4500",
    borderRadius: 20,
    padding: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
