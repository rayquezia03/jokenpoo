import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Barra from './Barra';

const Header = () => {

	return (

		<View style={styles.main}> 
          <Image
            source={ require('../../img/jogadores.png') }
            style={ {flex: 1, resizeMode: "stretch"} }
          />
        </View>		
	
    );
	
}

const styles = StyleSheet.create({

	main: {
	    flex: 1,
	    flexDirection: 'row',
	    borderColor: '#208036',
	    margin: 2,
	    padding: 20,
	    borderWidth: 1,
        
	  },
});

export default Header;