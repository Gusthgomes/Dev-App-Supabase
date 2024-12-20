import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { supabase } from '../../lib/supabase';
import { useAuth } from '@/src/context/AuthContext';
import colors from '@/constants/colors';
import { router } from 'expo-router';

export default function Profile() {

  const { setAuth, user } = useAuth();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    setAuth(null);
    router.replace('/(auth)/signin/page');

    if (error) {
      Alert.alert("Erro ao sair da conta", error.message);
      return;
    }
  }

 return (
   <View style={styles.container} >
    <Text>Perfil do usuário</Text>

    <Text>Olá! { user?.email }</Text>

    <Pressable style={styles.button} onPress={ handleSignOut}>
      <Text style={{ color: colors.white }}>Sair</Text>
    </Pressable> 
      
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        backgroundColor: colors.green,
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 50,
        alignItems: 'center',
    }
})