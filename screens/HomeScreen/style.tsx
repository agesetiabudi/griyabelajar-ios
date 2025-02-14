import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        backgroundColor: '#F78912',
        height: 30,
        width: '100%'
    },
    body: {
        flex: 1.5,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',  // Warna latar belakang (opsional)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 20
    },
    h3: {
        fontSize: 26 ,
        // color: '#F78912',
        color: '#3D4357',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold'
    },
    containerUrl: {
        flexDirection: 'row',
        marginTop: 40
    },
    input: {  
        height: 50,
        borderColor: '#ccc',
        borderWidth: 2,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginStart: 10,
        flex: 1,
        color: '#000',
        fontFamily: 'Poppins-Medium'
    },
    widgetButtonUrl: {
        backgroundColor: '#F78912' ,
        padding: 15 ,
        borderRadius: 10
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#fd7e14',
        padding: 14,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold'
    },
})

export default style