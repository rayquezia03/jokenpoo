import {React, useState} from 'react';
import { View, StyleSheet} from "react-native";
import Topo from "../components/Topo";
import Painel from "../components/Painel";
import Painel2 from "../components/painel2";
import Personagens from "../components/Personagens";
//import Score from "../components/score";

const messages = {
    computerWin: {
        title: "Derrota",
        message: "Você perdeu!",
      },
    playerWin: {
        title: "Vitória!",
        message: "Você venceu!",
      },
    };

export default function MainScreen(){
    const [messageModal, setMessageModal] = useState("");

    return(
        <View style={styles.container}>
            <Topo/>
            <Painel/>
            <Personagens/>
            <Painel2/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '100%'
    }

})