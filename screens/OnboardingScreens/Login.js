import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../../components/CustomInput';
import KaraButton from '../../components/KaraButton';
import KaraText from '../../components/KaraText';
import { COLORS } from '../../utils/theme';
import Close from '../../components/SvgComponents/close'

const Login = ({ navigation, screenProps }) => {
    
    const [firstName, setFirstName] = useState('')

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{ alignItems: 'flex-end', marginTop: 10, marginRight:10}}><Close /></TouchableOpacity>
            <KaraText bold size={18} padding={[10,0,18,0]}>Sign In</KaraText>

            {/* Form Section */}

           
            <CustomInput label="Email" placeholder="Email Address" onChangeText={setFirstName} value={firstName} type="emailAddress" />
            <CustomInput label="Password" placeholder="Minimum of 8 Characters" onChangeText={setFirstName} value={firstName} type="emailAddress" />

            <KaraButton onPress={() => navigation.navigate('LinkScreen')} ><KaraText color={COLORS.white} lightbold>Sign In</KaraText></KaraButton>
        </View>
    )
}

Login.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: COLORS.white
  },
})

export default Login;

