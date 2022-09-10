import { View, StyleSheet, Text} from "react-native";
import ButGame from "./ButGame";
import Reset from "./Reset";

export default function Topo(){
    return(
        <View style={styles.container}>
            <ButGame/>
            <Reset/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '6B8E23',
        padding: 5
    }
})