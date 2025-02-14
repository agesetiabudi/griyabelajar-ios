import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackNavigatorParamsList } from "../../App";
import { Camera, useCameraDevices, CameraPermissionStatus, useCameraDevice, useCodeScanner } from 'react-native-vision-camera';
import { useCallback, useEffect, useRef, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import type { Code } from 'react-native-vision-camera'

const ScanScreen = ({ navigation }: NativeStackScreenProps<RootStackNavigatorParamsList, 'ScanScreen'>) => {
    const device    = useCameraDevice('back')
    const isFocused = useIsFocused()
    const isActive  = isFocused
    const [torch, setTorch] = useState(false)

    const onCodeScanned = useCallback((codes: Code[]) => {
        const value = codes[0]?.value;
        if (!value) return;
    
        let url = value ?? '';
        let sendurl = url.startsWith('https://') ? url.split('https://')[1] : url;
    
        navigation.navigate('ExploreScreen', { url: sendurl });
    }, []);

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: onCodeScanned,
    })

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {device != null && (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={isActive}
                    codeScanner={codeScanner}
                    torch={torch ? 'on' : 'off'}
                    enableZoomGesture={true}
                />
            )}
        </View>
    );
}

export default ScanScreen;
