import { KeyboardAvoidingView, View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Modal, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [visible, setVisible] = useState(false); 

  const handleLogin = () => {

    if (usuario === 'arthur_dev' && senha === '123456') {
      alert("Login realizado com sucesso! Conectado ao banco erp_crm.");
    } else {
      setVisible(true); 
    }
  };

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image
          source={require('./assets/images.jpg')}
          style={styles.logo}
        />
      </View>

      <View style={styles.view2}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          autoCorrect={false}
          value={usuario}
          onChangeText={setUsuario} 
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha} 
        />

        <View style={styles.view3}>
          <TouchableOpacity style={styles.b1} onPress={handleLogin}>
            <Text style={styles.txtEnviar}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCriarConta}>
            <Text style={styles.txtCriarConta}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        {/* Modal de Erro Estilizado */}
        <Modal animationType='slide' transparent={true} visible={visible}>
          <View style={styles.modalCentrado}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Ops! Usuário ou senha incorretos. ❌</Text>
              <Button title='Tentar novamente' color="#0047ab" onPress={() => setVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#222222' },
  viewLogo: { flex: 1, justifyContent: 'center' },
  logo: { width: 250, height: 250 },
  input: { backgroundColor: '#FFF', width: 300, marginBottom: 15, color: '#222', fontSize: 18, borderRadius: 7, padding: 10 },
  view2: { flex: 1, alignItems: 'center' },
  view3: { width: 300, alignItems: 'center', marginTop: 20 },
  b1: { backgroundColor: "#0047ab", width: "100%", height: 45, alignItems: "center", justifyContent: "center", borderRadius: 7 },
  txtEnviar: { color: "#FFF", fontSize: 18 },
  btnCriarConta: { marginTop: 15 },
  txtCriarConta: { color: "#FFF" },

  modalCentrado: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: "white", borderRadius: 20, padding: 35, alignItems: "center", shadowColor: "#000", elevation: 5 },
  modalText: { marginBottom: 15, textAlign: "center", fontSize: 16, fontWeight: 'bold' }
});
