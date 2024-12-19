
import { useState } from 'react';
import colors from '@/constants/colors';
import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSignUp() {
      setLoading(true);
      console.log({ email, password });
    }

 return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.logoText}>Dev <Text style={{ color: colors.green}}>App</Text></Text>
      <Text style={styles.slogan}>O futuro da programação</Text>
    </View>

    

    <View style={styles.form}>

      <View>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          placeholder='Digite seu e-mail'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          placeholder='Digite sea senha'
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <Pressable style={styles.button} onPress={ handleSignUp }>
        <Text style={ styles.buttonText}>Entrar</Text>
      </Pressable>

      <Link href="/(auth)/signup/page" style={styles.link}>
        <Text style={{ fontSize: 16 }}>Ainda não tem uma conta ? <Text style={styles.textLink}>Cadastre-se</Text></Text>
      </Link>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    slogan: {
        color: colors.white,
        fontSize: 20,
        marginBottom: 34,
    },
    form: {
      flex: 1,
      backgroundColor: colors.white,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingTop: 24,
      paddingLeft: 14,
      paddingRight: 14,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: colors.zinc,
      borderRadius: 8,
      paddingLeft: 8,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    label: {
      marginBottom: 4,
      color: colors.zinc,
      fontSize: 16,
    },
    button: {
      
      width: '100%',
      backgroundColor: colors.green,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 14,
      paddingBottom: 14,
    },
    buttonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    link: {
      marginTop: 16,
      textAlign: 'center',
    },
    textLink: {
      color: colors.green,
      fontSize: 16,
    },
})