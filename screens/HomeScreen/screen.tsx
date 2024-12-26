import React, { useState } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../Router";
import style from './style';
// import Icon from '@react-native-vector-icons/FontAwesome6';

const HomeScreen = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'HomeScreen'>) => {
    const [url, setUrl] = useState('');

    const handleToUrl = () => {
        let cek = url.toLocaleLowerCase().includes('griyabelajar');
        if(cek){
        //   router.push(`/explore?link=${encodeURIComponent(url)}`)
          setUrl('')
        }
      }

    return (
        <View style={style.container}>
            <View style={style.body}>
                <View style={style.row}>
                    <Image source={require('../../assets/images/logo.png')}  style={{  width: 90 , height: 80 , marginEnd: 20 }} />
                    <Image source={require('../../assets/images/logo_nhsc.png')} style={{  width: 90 , height: 80}} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 25 }}>
                    <Text style={style.h3}>Griya Belajar Exam</Text>
                    <Text style={{ ...style.h3 , marginTop: 10 }}>Lembaga NHSC</Text>
                </View>
                <View style={{ ...style.containerUrl }}>
                    <View style={style.widgetButtonUrl}>
                        <Text style={{ color: '#fff' , fontSize: 15 , fontWeight: 'bold' }}>https://</Text>
                    </View>
                    <TextInput 
                        style={style.input}
                        placeholder="Link Url"
                        value={url}
                        onChangeText={setUrl} 
                        placeholderTextColor="white"
                    />
                </View>
                <View style={{ marginTop: 40 , width: '100%'}}>
                    <TouchableOpacity style={style.button} onPress={() => handleToUrl()}>
                        {/* <Icon name="link" size={24} color="white" iconStyle="solid" /> */}
                        <Text style={style.buttonText}> Akses Url</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...style.button, marginTop: 15 }}>
                        {/* <Icon name="qrcode" size={24} color="white" iconStyle="sol
                        id" /> */}
                        <Text style={{ ...style.buttonText, marginStart: 5}}>SCAN QR-CODE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 0.2 , marginBottom: 70 }}>
                <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}>Aplikasi ini hanya di perlukan untuk <Text style={{  color: '#F78912' }}>griyabelajar.com</Text></Text>
                <Text style={{ color: '#fff' }}>versi 1.7.3</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen