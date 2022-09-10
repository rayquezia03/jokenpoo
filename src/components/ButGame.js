import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity,Text } from 'react-native';

export default function ButGame(){

	return (
		
		<View style={styles.container}>
			<TouchableOpacity onpress={() => this.onPress(2)} >
            	<Text style={styles.text}> GAME </Text>
	    	</TouchableOpacity>
		</View>
	
	
    );
	
}

const styles = StyleSheet.create({

	container: {
        marginLeft: 5
	},
	
	text:{
		fontWeight: "bold",
		color: "white",
		fontSize: 30
		
	}


});
             
          
          
          