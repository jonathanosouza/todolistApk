import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function SignIn() {
  const navigation = useNavigation();

  const [cadastro, setCadastro] = useState(false);

  return (
    <View style={styles.container}>
      <Animatable.View
        delay={500}
        animation="fadeInLeft"
        style={styles.containerHeader}>
        <Text style={styles.message}>Bem-Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={styles.containerForm}>
        <TextInput
          placeholder="Digite um email"
          style={styles.containerinput}
        />
        <TextInput
          placeholder="Digite um Senha"
          style={styles.containerinput}
        />

        {cadastro && (
          <>
            <TextInput
              placeholder="Confirmar Senha"
              style={styles.containerinput}
              // value={confirmarSenha}
              // onChangeText={text => setConfirmarSenha(text)}
            />
            <TextInput
              placeholder="Nome"
              style={styles.containerinput}
              // value={nome}
              // onChangeText={text => setNome(text)}
            />
          </>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>
            {!cadastro ? 'Acessar Página' : 'Cadastrar Conta'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            {cadastro ? 'Já possui cadastro?' : 'Não tem cadastro?'}
            <Text onPress={() => setCadastro(!cadastro)}>
              {!cadastro ? ' Cadastre-se' : ' Acesse sua conta'}
            </Text>
          </Text>
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
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    padding: '10%',
  },
  message: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    padding: '10%',
  },
  containerinput: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 28,
    marginEnd: 12,
    marginBottom: 12,
    height: 60,
    borderBottomWidth: 1,
  },
  text: {
    marginTop: 10,
    color: '#a1a1a1',
  },
  button: {
    // position: "absolute",
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 8,
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    marginTop: '15%',
    marginBottom: '2%',
  },
  buttonText: {
    color: '#fff',
  },
  buttonRegister: {
    alignSelf: 'center',
  },
  registerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a1a1a1',
  },
});
