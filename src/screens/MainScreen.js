import { View, StyleSheet } from "react-native";
import Topo from "../components/Topo";
import Painel from "../components/Painel";

export default function MainScreen(){
    return(
        <View style={styles.container}>
            <Topo/>
            <Painel/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }

})