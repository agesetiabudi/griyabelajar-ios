import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        fontSize: 18,
        padding: 10,
        color: '#000',
    },
    bottomText: {
        fontSize: 14,
        color: '#000',
    },
    page2: {
        flex: 1,
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
      backHeader: {
        backgroundColor: "#00000090",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        padding: "2%",
        height: "5%",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
      },
      footer: {
        backgroundColor: "#00000090",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "10%",
        height: "20%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      },
})

export default style