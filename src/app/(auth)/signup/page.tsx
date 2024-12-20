import { useState } from 'react';
import colors from '@/constants/colors';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { router } from 'expo-router';

import { supabase } from '../../lib/supabase';

export default function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    setLoading(true);

     const { data, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        }
      }
     })

      if (error) {
        Alert.alert("Erro ao cadastrar o usuário", error.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      router.replace('/(auth)/signin/page');
  }

 return (
  <SafeAreaView style={{ flex: 1}}>
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
    <View style={styles.container}>
      <View style={styles.header}>

        <Pressable style={styles.backButton} onPress={ () => router.back() }>
          <Ionicons name="arrow-back" size={24} color={colors.white} />
        </Pressable>

        <Text style={styles.logoText}>Dev <Text style={{ color: colors.green}}>App</Text></Text>
        <Text style={styles.slogan}>Crie uma conta</Text>
      </View>

      <View style={styles.form}>

        <View>
          <Text style={styles.label}>Nome:</Text>
            <TextInput
              placeholder='Nome completo'
              style={styles.input}
              maxLength={70}
              value={name}
              onChangeText={setName}
            />
        </View>

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
          <Text style={ styles.buttonText}>
            { loading ? 'Carregando...' : 'Cadastrar'} 
          </Text>
        </Pressable>

      </View>
    </View>
    </ScrollView>
   </SafeAreaView>
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
        fontSize: 24,
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
    backButton: {
      marginBottom: 8,
      marginTop: 0,
      backgroundColor: "rgba(255, 255, 255, 0.55))",
      alignSelf: 'flex-start',
      padding: 8,
      borderRadius: 8,
    }
})