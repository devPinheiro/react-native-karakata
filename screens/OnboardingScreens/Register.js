import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomInput from '../../components/CustomInput';
import KaraButton from '../../components/KaraButton';
import KaraText from '../../components/KaraText';
import { COLORS } from '../../utils/theme';
import Close from '../../components/SvgComponents/close'

const Register = ({ navigation, screenProps }) => {
    
    const [firstName, setFirstName] = useState('')

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.goBack()} style={{ alignItems: 'flex-end', marginTop: 10, marginRight:10}}><Close /></TouchableOpacity>
            <KaraText bold size={18} padding={[10,0,18,0]}>Create your account</KaraText>

            {/* Form Section */}

            <CustomInput label="First Name" placeholder="First Name" onChangeText={setFirstName} value={firstName} />
            <CustomInput label="Last Name" placeholder="Last Name" onChangeText={setFirstName} value={firstName} />
            <CustomInput label="Email" placeholder="Email Address" onChangeText={setFirstName} value={firstName} type="emailAddress" />
            <CustomInput label="Password" placeholder="Minimum of 8 Characters" onChangeText={setFirstName} value={firstName} type="emailAddress" />

            <KaraButton ><KaraText color={COLORS.white} lightbold>Sign Up</KaraText></KaraButton>
        </View>
    )
}

Register.navigationOptions = {
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

export default Register;

