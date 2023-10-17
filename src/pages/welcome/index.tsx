import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../assets/argologo.png')}
          style={{width: '60%', height: '45%'}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}>
        <Text style={styles.title}>Agilidade, praticidade, e segurança.</Text>
        <Text style={styles.text}>Acesse a Página para iniciar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SingIn')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginEnd: 12,
  },
  text: {
    marginTop: 10,
    color: '#a1a1a1',
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    height: '15%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: '6%',
  },
  buttonText: {
    color: '#fff',
  },
});
