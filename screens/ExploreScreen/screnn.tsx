import { View } from "react-native"
import WebView from 'react-native-webview';
import style from "./style";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorParamsList } from "../../App";

const ExploreScreen = ({ navigation , route }: NativeStackScreenProps<RootStackNavigatorParamsList, 'ExploreScreen'>) => {
    const [url , setUrl]    = useState('');

    useEffect(() => {
        if(route.params){
            setUrl(route.params.url)
        }else{
            setUrl('https://app.griyabelajar.com')
        }
    },[route.params])

    return (
        <View style={style.container}>
            <WebView
                source={{ uri: `https://${url}/#/` }}
                style={{ flex: 1 }}
            />
        </View>
    )
}

export default ExploreScreen