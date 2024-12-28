import React, { useState } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from './style';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLink , faBarcode, faQrcode } from '@fortawesome/free-solid-svg-icons'
import { RootStackNavigatorParamsList } from '../../App';

const HomeScreen = ({ navigation }: NativeStackScreenProps<RootStackNavigatorParamsList, 'HomeScreen'>) => {
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
                    <Image source={require('../../assets/images/logo_nhsc.png')} style={{  width: 90 , height: 90}} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={style.h3}>Griya Belajar Exam Lembaga NHSC</Text>
                </View>
                <View style={{ ...style.containerUrl }}>
                    <View style={style.widgetButtonUrl}>
                        <Text style={{ color: '#fff' , fontSize: 15 , fontFamily: 'Poppins-Medium' }}>https://</Text>
                    </View>
                    <TextInput 
                        style={style.input}
                        placeholder="Link Url"
                        value={url}
                        onChangeText={setUrl} 
                        placeholderTextColor="grey"
                    />
                </View>
                <View style={{ marginTop: 20 , width: '100%'}}>
                    <TouchableOpacity style={style.button} onPress={() => handleToUrl()}>
                        {/* <FontAwesomeIcon icon={faLink} size={24} color="white" style={{ marginEnd: 10 }} /> */}
                        <Text style={style.buttonText}>AKSES URL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...style.button, marginTop: 15 , backgroundColor: '#3D4357' }} onPress={() => navigation.navigate('ScanScreen')}>
                        <FontAwesomeIcon icon={faQrcode} size={24} color="white" style={{ marginEnd: 10 }} />
                        <Text style={{ ...style.buttonText, marginStart: 5}}>SCAN QR-CODE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: 'flex-end', flex: 0.2 , marginBottom: 50 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#000' , fontFamily: 'Poppins-Regular' , fontSize: 12 }}>Aplikasi ini hanya di perlukan untuk <Text style={{  color: '#F78912' }}>griyabelajar.com</Text></Text>
                    <Text style={{ color: '#000' , fontFamily: 'Poppins-Medium' }}>versi 1.7.3</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen