import {React, useState} from 'react'
import { View, StyleSheet, Image} from "react-native";

export default function Painel(){
    const [touchImage, setTouch] = useState(false)
    return(
        <View style={styles.container}>
            <Image
                source = {touchImage ? require("../../img/regras.png") : require("../../img/jogadores.png")}
                style = {{width: '100%', height: '100%'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '30%',
        width: '93%',
        marginTop: 15,
        marginHorizontal: 'auto',
        backgroundColor: 'white',
        borderWidth: 1
    },

    image: {
    
    }
})