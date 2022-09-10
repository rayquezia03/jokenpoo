import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const Personagens = () => {

	return (
		<View style={styles.main}> 
            <TouchableOpacity onpress={() => this.onPress(1)} title = 'Pedra'>
                <Image
                    source={ require('../../img/pedra.png')}
                    style = {styles.image}
                />
	        </TouchableOpacity>
            <TouchableOpacity onpress={() => this.onPress(2)} title = 'Spock'>
                <Image
                    source={ require('../../img/spock.png')}
                    style = {styles.image}
                />
	        </TouchableOpacity>
            <TouchableOpacity onpress={() => this.onPress(3)} title = 'Tesoura'>
                <Image
                    source={ require('../../img/tesoura.png')}
                    style = {styles.image}
                />
	        </TouchableOpacity>
            <TouchableOpacity onpress={() => this.onPress(4)} title = 'Lagarto'>
                <Image
                    source={ require('../../img/lagarto.png')}
                    style = {styles.image}
                />
	        </TouchableOpacity>
            <TouchableOpacity onpress={() => this.onPress(5)} title = 'Papel'>
                <Image
                    source={ require('../../img/papel.png')}
                    style = {styles.image}
                />
	        </TouchableOpacity>

        </View>		
	
    );
	
}

const styles = StyleSheet.create({

	image: {
        justifyContent:'space-around',   
        borderRadius: 100,
        width: 64,
        height: 64, 

	  },
});

export default Personagens;