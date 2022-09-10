import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function Reset(){

	return (

		<TouchableOpacity onpress={() => this.onPress(2)} >
            <Image
                source = {require('../../img/botao.png')}
                style = {styles.image}
            />
	    </TouchableOpacity>
	
	
    );
	
}

const styles = StyleSheet.create({


      image: {
		marginRight: 15,
		width: 38,
		height: 38
        
	  },
});

             
          
          
          