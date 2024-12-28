import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Alert, Text, View } from "react-native"
import { RootStackNavigatorParamsList } from "../../App"
import { useEffect } from "react";
import { request, PERMISSIONS } from 'react-native-permissions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import style from "./style";

const ScanScreen = ({ navigation }: NativeStackScreenProps<RootStackNavigatorParamsList, 'ScanScreen'>) => {
    useEffect(() => {
        request(PERMISSIONS.IOS.CAMERA).then(response => {
          if (response !== 'granted') {
            Alert.alert('Permission required', 'Please enable camera permissions');
          }
        });
    }, []);

    const onSuccess = (e: any) => {
        Alert.alert('QR Code scanned', e.data);
    };

    return (
        <View style={style.container}>
            <QRCodeScanner
                onRead={onSuccess}
            />
        </View>
    )
}

export default ScanScreen