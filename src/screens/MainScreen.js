import { View, StyleSheet } from "react-native";
import Topo from "../components/Topo";
import Painel from "../components/Painel";
import Personagens from "../components/personagens";

export default function MainScreen(){
    return(
        <View style={styles.container}>
            <Topo/>
            <Painel/>
            <Personagens/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }

})