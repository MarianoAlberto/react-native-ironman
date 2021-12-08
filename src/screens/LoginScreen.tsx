import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
/* import {View, StyleSheet, Button} from 'react-native'; */
//import {useAuthorization} from '../components/AuthProvider';

const SignOut = ({ navigation }: any) => {
  //const {signOut} = useAuthorization();
  function navigateAuth() {
    //signOut();
    navigation.navigate('Home');
  }
  return (
    <View>
      <Button title="Sign Out" color="#f194ff" onPress={navigateAuth} />
    </View>
  );
};

export function LoginScreen(props: any) {
  //const {status, authToken} = useAuthorization();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Status: HOLA</Text>
      <View style={styles.actions}>
        <SignOut {...props} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#336EFF',
  },
  detailsContainer: {
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
