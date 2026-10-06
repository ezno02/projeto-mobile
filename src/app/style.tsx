import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    Cards: {
        justifyContent: "center",
        backgroundColor: "#1e1857",
        gap: 50,
        padding: 40,
        flexDirection: "row",
        flexWrap: "wrap",
        // color: "white",


    },
    Card: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "grey",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        height: 200,
        padding: 10,
        backgroundColor: "#161147",
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 10,
        resizeMode: 'contain',
    },

});